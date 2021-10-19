FROM jekyll/jekyll:latest
COPY . /var/dojo
WORKDIR /var/dojo
RUN mkdir _site
RUN find /var/dojo/helm -delete
RUN find /var/dojo/helmfile -delete
RUN bundle install
RUN jekyll build --config _config.yml
ENTRYPOINT ["jekyll", "serve"]