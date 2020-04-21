FROM node:12-alpine

ADD . / payidorg/

RUN npm install --cache .npm --no-audit --prefer-offline -g gatsby-cli
RUN npm install --cache .npm --no-audit --prefer-offline --prefix ./payidorg

RUN (cd payidorg/; gatsby build;)

WORKDIR payidorg

EXPOSE 9000

CMD ["gatsby", "serve", "-H", "0.0.0.0"]
