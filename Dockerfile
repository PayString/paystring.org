FROM node:12-alpine

ARG GATSBY_RELEASE_ENV
ENV GATSBY_RELEASE_ENV=$GATSBY_RELEASE_ENV

ADD . / paystringorg/

RUN npm install --cache .npm --no-audit --prefer-offline -g gatsby-cli@2.19.3
RUN npm install --cache .npm --no-audit --prefer-offline --prefix ./paystringorg
RUN (cd paystringorg/; gatsby build;)

WORKDIR /paystringorg

FROM nginx:1.17-alpine
COPY --from=0 /paystringorg/public /usr/share/nginx/html
COPY files/default.conf /etc/nginx/conf.d/default.conf
