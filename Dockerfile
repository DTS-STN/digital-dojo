FROM jekyll/jekyll:latest
COPY . /var/dojo
WORKDIR /var/dojo
RUN chown -R jekyll *
RUN find /var/dojo/helm -delete
RUN find /var/dojo/helmfile -delete
RUN bundle install
CMD JEKYLL_ENV=production bundle exec jekyll build
ENTRYPOINT ["jekyll", "serve", "--livereload", "--host", "0.0.0.0"]