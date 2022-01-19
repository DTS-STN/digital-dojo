import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs
import jetbrains.buildServer.configs.kotlin.v2019_2.vcs.GitVcsRoot

/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.

VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.

To debug settings scripts in command-line, run the

    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate

command and attach your debugger to the port 8000.

To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task nodeesdcdtsk8sdev
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2021.2"

project {
    description = "Dojo Website"
    vcsRoot(DojoGithub)
    vcsRoot(DojoGithubPR)
    buildType(Build)
    buildType(BuildPR)
    params {
        param("env.PROJECT", "dojo")
    }
}

object DojoGithub : GitVcsRoot({
    name = "Dojo github"
    url = "https://github.com/DTS-STN/digital-dojo"
    branch = "refs/heads/main"
    branchSpec = "+:refs/heads/*"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})

object DojoGithubPR : GitVcsRoot({
    name = "Dojo github PR"
    url = "https://github.com/DTS-STN/digital-dojo"
    branch = "refs/heads/main"
    branchSpec = "+:refs/pull/*"
    authMethod = uploadedKey {
        userName = "git"
        uploadedKey = "dtsrobot"
    }
})

object Build : BuildType({
    name = "Build & Deploy Dynamic Branches"
    description = "dojo-<<yourbranchname>>.dev.dts-stn.com/digital-dojo/"

    params {
        param("env.BASE_DOMAIN", "dev.dts-stn.com")
        param("env.TARGET", "dev")
        param("env.K8S_CLUSTER_NAME", "esdcdtsk8sdev-K8S-admin")
        param("env.BRANCH", "%teamcity.build.branch%")
    }

    vcs {
        root(DojoGithub)
    }

    steps {
        script {
            name = "Build & Tag Docker Image"
            scriptContent = """
                chmod -R 777 *
                docker build -t ${'$'}ACR_DOMAIN/${'$'}PROJECT:${'$'}DOCKER_TAG .
            """.trimIndent()
        }
        script {
            name = "Login to Azure and ACR"
            scriptContent = """
                az login --service-principal -u %TEAMCITY_USER% -p %TEAMCITY_PASS% --tenant %env.TENANT-ID%
                az account set -s %env.SUBSCRIPTION%
                az acr login -n MTSContainers
            """.trimIndent()
        }
        dockerCommand {
            name = "Push Image to ACR"
            commandType = push {
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
            }
        }
        script {
            name = "Deploy w/ Helmfile"
            scriptContent = """
                cd ./helmfile
                az account set -s %env.SUBSCRIPTION%
                az aks get-credentials --admin --resource-group %env.RG_DEV% --name %env.AKS_DEV%
                helmfile -e ${'$'}TARGET apply
            """.trimIndent()
        }
    }

    triggers {
        vcs {
            branchFilter = "+:*"
        }
    }
})


object BuildPR : BuildType({
    name = "Build & Deploy PR"
    description = "dojo-int.dev.dts-stn.com/digital-dojo/"

    allowExternalStatus = true

    params {
        param("env.BASE_DOMAIN", "dev.dts-stn.com")
        param("env.TARGET", "int")
        param("env.K8S_CLUSTER_NAME", "esdcdtsk8sdev-K8S-admin")
        param("env.BRANCH", "int")
    }

    vcs {
        root(DojoGithubPR)
    }

    steps {
        script {
            name = "Build & Tag Docker Image"
            scriptContent = """
                chmod -R 777 *
                docker build -t ${'$'}ACR_DOMAIN/${'$'}PROJECT:${'$'}DOCKER_TAG .
            """.trimIndent()
        }
        script {
            name = "Login to Azure and ACR"
            scriptContent = """
                az login --service-principal -u %TEAMCITY_USER% -p %TEAMCITY_PASS% --tenant %env.TENANT-ID%
                az account set -s %env.SUBSCRIPTION%
                az acr login -n MTSContainers
            """.trimIndent()
        }
        dockerCommand {
            name = "Push Image to ACR"
            commandType = push {
                namesAndTags = "%env.ACR_DOMAIN%/%env.PROJECT%:%env.DOCKER_TAG%"
            }
        }
        script {
            name = "Deploy w/ Helmfile"
            scriptContent = """
                cd ./helmfile
                az account set -s %env.SUBSCRIPTION%
                az aks get-credentials --admin --resource-group %env.RG_DEV% --name %env.AKS_DEV%
                helmfile -e ${'$'}TARGET apply
            """.trimIndent()
        }
    }

    triggers {
        vcs {
            branchFilter = "+:*/head"
        }
    }
})
