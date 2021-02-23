FROM node:13.12.0-alpine

WORKDIR /usr/src/acmedevice

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . .

EXPOSE 4200

CMD ["npm", "start"]