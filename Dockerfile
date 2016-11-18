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
