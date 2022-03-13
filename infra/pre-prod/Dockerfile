FROM node:17.6.0-alpine3.14 as development

WORKDIR /app

COPY ./package.json ./

# COPY ./yarn.lock ./

RUN npm install

COPY . .

# EXPOSE 3000

RUN npm run build