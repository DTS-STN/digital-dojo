FROM jekyll/jekyll:latest
COPY . /var/dojo
WORKDIR /var/dojo
RUN mkdir _site
RUN find /var/dojo/helm -delete
RUN find /var/dojo/helmfile -delete
RUN bundle install
CMD JEKYLL_ENV=production bundle exec jekyll build
COPY _config.yml ./_site/
ENTRYPOINT ["jekyll", "serve", "--config", "/var/dojo/_site/_config.yml"]