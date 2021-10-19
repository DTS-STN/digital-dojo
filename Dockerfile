FROM jekyll/jekyll:latest
COPY . /var/dojo
WORKDIR /var/dojo
RUN mkdir _site
RUN bundle install
RUN jekyll build
ENTRYPOINT ["jekyll", "serve"]