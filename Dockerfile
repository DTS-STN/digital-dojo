FROM jekyll/jekyll:latest
COPY . /app
WORKDIR /app
RUN find /app/helm -delete
RUN find /app/helmfile -delete
RUN bundle install
CMD bundle exec jekyll build
ENTRYPOINT [ "jekyll", "serve" ]