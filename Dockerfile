FROM node:6.2.0

RUN npm install -g typings && npm install -g angular-cli@1.0.0-beta.10
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json typings.json $HOME/tabletest/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/tabletest
RUN npm install --unsafe-perm=true

USER root
COPY . $HOME/tabletest
RUN chown -R app:app $HOME/*
USER app

CMD ["npm", "start", "--host=0.0.0.0"]

#STEP 1: build the image from this directory
#`docker build -t uma-dev .`
#
# the above uses this Dockerfile to build an image (-t) for tag as uma-dev

#STEP 2: create and run a container using the image created in STEP 1
#`docker-compose up`
#
# the above uses docker-compose file (see: ./docker-compose.yml) file to create and run a container
