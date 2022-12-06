#!/bin/sh

#The image name (db or api)
image=$1

#type of image (stable or release)
type=$2

#The image tag
tag=${IMAGE_TAG}

formated_image=${DOCKER_PRIVATE_REGISTER}/${type}/${image}:${tag}
formated_image_latest=${DOCKER_PRIVATE_REGISTER}/${type}/${image}:"latest"

if [ "$type" = "release" ]; then
   docker build --target staging --no-cache -t "${formated_image}" -f infra/build/"${image}"/Dockerfile .  
else
  docker build --target production --no-cache -t "${formated_image}" -f infra/build/"${image}"/Dockerfile .  
fi

docker tag "${formated_image}" "${formated_image_latest}"


