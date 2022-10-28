#!/bin/sh

#The image name (db or api)
image=$1

#type of image (stable or release)
type=$2

#The image tag
tag=${IMAGE_TAG}

formated_image=${DOCKER_PRIVATE_REGISTER}/${type}/${image}:${tag}

formated_image_latest=${DOCKER_PRIVATE_REGISTER}/${type}/${image}:"latest"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
docker build --no-cache -t "${formated_image}" -f infra/build/"${image}"/Dockerfile .
=======
docker build -t "${formated_image}" -f infra/build/"${image}"/Dockerfile .
>>>>>>> 34a778e (Set up infra as code)
=======
docker build --no-cache -t "${formated_image}" -f infra/build/"${image}"/Dockerfile .
>>>>>>> 87dddb9 (Add no cache to build)
=======
docker build --no-cache -t "${formated_image}" -f infra/build/"${image}"/Dockerfile .
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c

docker tag "${formated_image}" "${formated_image_latest}"