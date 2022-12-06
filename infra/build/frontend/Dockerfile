FROM node:14-alpine as dependencies
WORKDIR /my-project
COPY package.json  ./
RUN npm install


FROM node:14-alpine as builder_s
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN npm run build:staging

FROM node:14-alpine as staging
WORKDIR /my-project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder_s /my-project/next.config.js ./
COPY --from=builder_s /my-project/public ./public
COPY --from=builder_s /my-project/.next ./.next
COPY --from=builder_s /my-project/node_modules ./node_modules
COPY --from=builder_s /my-project/package.json ./package.json
COPY --from=builder_s /my-project/.env.staging ./.env.staging

RUN ls
EXPOSE 3000
CMD ["npm", "run", "start:staging"]


FROM node:14-alpine as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN npm run build

FROM node:14-alpine as production
WORKDIR /my-project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json
COPY --from=builder /my-project/.env.production ./.env.production

EXPOSE 3000
CMD ["npm", "start"]