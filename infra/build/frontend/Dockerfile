<<<<<<< HEAD
<<<<<<< HEAD
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
=======
FROM node:alpine as dependencies
=======
FROM node:14-alpine as dependencies
>>>>>>> 1523c38 (Change the node image to 14-alpine)
WORKDIR /my-project
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:14-alpine as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn build

<<<<<<< HEAD
FROM node:alpine as runner
>>>>>>> 34a778e (Set up infra as code)
=======
FROM node:14-alpine as runner
>>>>>>> 1523c38 (Change the node image to 14-alpine)
WORKDIR /my-project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json
<<<<<<< HEAD
VOLUME [ "/my-project" ]
EXPOSE 3000
CMD ["npm", "start"]
=======

EXPOSE 3000
CMD ["yarn", "start"]
>>>>>>> 34a778e (Set up infra as code)
