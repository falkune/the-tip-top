# FROM node:17.6.0-alpine3.14 as development

# WORKDIR /app

# COPY ./package.json ./

# COPY ./yarn.lock ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# RUN npm run build


FROM node:17.6.0-alpine3.14 as development
WORKDIR /my-project
COPY package.json yarn.lock ./

FROM node:17.6.0-alpine3.14 as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn build

FROM node:17.6.0-alpine3.14 as runner
WORKDIR /my-project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]