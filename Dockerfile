FROM node:8-alpine

COPY package.json /tmp/package.json

COPY package-lock.json /tmp/package-lock.json

RUN cd /tmp/ && npm install --production

RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www

WORKDIR /var/www

COPY . /var/www

EXPOSE 8080

VOLUME /var/www

HEALTHCHECK --interval=5s --timeout=3s --retries=5 CMD curl -f http://localhost:3000/health || exit 1

ENTRYPOINT  ["npm", "start"]
