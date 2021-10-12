FROM jekyll/jekyll:latest
COPY . /app
WORKDIR /app
RUN bundle install
CMD bundle exec jekyll build
ENTRYPOINT [ "jekyll", "serve" ]