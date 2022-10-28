#!/bin/sh
#The image tag
echo "push images to our private registry hub"

#The current version  
tag=${IMAGE_TAG}

#The current image (can be db or api)
image=$1

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
if [ "$BRANCH_NAME" = "release" ]; then
=======
if [ "$BRANCH_NAME" = "dev" ]; then
>>>>>>> 34a778e (Set up infra as code)
=======
if [ "$BRANCH_NAME" = "release" ]; then
>>>>>>> a828a67 (Fix the registry.sh script for deploy)
=======
if [ "$BRANCH_NAME" = "release" ]; then
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
   
   formated="${DOCKER_PRIVATE_REGISTER}/release/${image}:${tag}"
   formated_latest="${DOCKER_PRIVATE_REGISTER}/release/${image}:latest"
  
else
   
   formated=${DOCKER_PRIVATE_REGISTER}/"stable/"${image}:${tag}
   formated_latest=${DOCKER_PRIVATE_REGISTER}/"stable/${image}:latest"
  
fi

docker push "${formated}"
docker push "${formated_latest}"