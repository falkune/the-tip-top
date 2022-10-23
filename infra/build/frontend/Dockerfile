FROM node:14-alpine as dependencies
WORKDIR /my-project
COPY package.json yarn.lock ./
RUN npm install

FROM node:14-alpine as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN npm run build

FROM node:14-alpine as runner
WORKDIR /my-project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json
VOLUME [ "/my-project" ]
EXPOSE 3000
CMD ["npm", "start"]