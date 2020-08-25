FROM node:12-alpine

ARG GATSBY_RELEASE_ENV
ENV GATSBY_RELEASE_ENV=$GATSBY_RELEASE_ENV

ADD . / payidorg/

RUN npm install --cache .npm --no-audit --prefer-offline -g gatsby-cli
RUN npm install --cache .npm --no-audit --prefer-offline --prefix ./payidorg
RUN (cd payidorg/; gatsby build;)

WORKDIR /payidorg

FROM nginx:1.17-alpine
COPY --from=0 /payidorg/public /usr/share/nginx/html
COPY files/default.conf /etc/nginx/conf.d/default.conf

RUN rm -vf /etc/nginx/nginx.conf
COPY files/nginx.conf /etc/nginx/nginx.conf

COPY files/GeoIP_country.dat.gz /tmp
RUN gunzip /tmp/GeoIP_country.dat.gz && \
    mkdir -vp /usr/share/GeoIP && \
    mv /tmp/GeoIP_country.dat /usr/share/GeoIP/