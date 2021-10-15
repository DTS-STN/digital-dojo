FROM jekyll/jekyll:latest
COPY . /app
WORKDIR /app
RUN find /app/helm -delete
RUN find /app/helmfile -delete
RUN bundle install
CMD JEKYLL_ENV=production bundle exec jekyll build
ENTRYPOINT ["jekyll", "serve", "--livereload", "--host", "0.0.0.0"]