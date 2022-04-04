<<<<<<< HEAD
<<<<<<< HEAD
FROM node:14-alpine as dependencies
WORKDIR /my-project
COPY package.json yarn.lock ./
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
RUN npm install
=======
RUN npm install 
>>>>>>> ad25be8 (Change yarn to npm)
=======
RUN yarn install --frozen-lockfile
>>>>>>> c033253 (Set the default Dockerfile)
=======
RUN yarn install
>>>>>>> 94c401f (Set the default Dockerfile)
=======
RUN yarn install && yarn add sharp
>>>>>>> c52076d (Add sharp package for docker production optimisation)
=======
RUN yarn install
>>>>>>> 372b9b5 (get some update from docker file)
=======
RUN yarn install && npm install
>>>>>>> a7a813a (add npm install in dockerFile)
=======
RUN npm install && npm install sharp
>>>>>>> fe59f4f (Use NPM for default package)

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
=======
RUN yarn install
>>>>>>> 792a8f1 (Update dockerFile: remove frozen)

FROM node:14-alpine as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN npm run build

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
CMD ["yarn", "start"]
>>>>>>> 34a778e (Set up infra as code)
=======
CMD ["npm run", "start"]
>>>>>>> cf2926b (Update dockerFile)
=======
CMD ["yarn", "start"]
>>>>>>> c033253 (Set the default Dockerfile)
=======
CMD ["npm", "start"]
>>>>>>> fe59f4f (Use NPM for default package)
