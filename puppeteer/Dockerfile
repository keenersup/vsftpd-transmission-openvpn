FROM arm32v7/alpine:latest

RUN apk upgrade && apk add --no-cache \
     chromium \
     nss \
     freetype \
     freetype-dev \
     harfbuzz \
     ca-certificates \
     ttf-freefont \
     nodejs \
     yarn 
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

COPY ./scripts/puppeteer-scripts /scripts
COPY ./scripts/settings /settings
RUN cd /scripts; yarn install



ENV NODE_ENV="development"
RUN chmod +x  /scripts/entry.sh


CMD ["/scripts/entry.sh"]


