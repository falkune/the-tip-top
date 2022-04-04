#!/bin/sh
#The image tag
echo "push images to our private registry hub"

#The current version  
tag=${IMAGE_TAG}

#The current image (can be db or api)
image=$1

if [ "$BRANCH_NAME" = "release" ]; then
   
   formated="${DOCKER_PRIVATE_REGISTER}/release/${image}:${tag}"
   formated_latest="${DOCKER_PRIVATE_REGISTER}/release/${image}:latest"
  
else
   
   formated=${DOCKER_PRIVATE_REGISTER}/"stable/"${image}:${tag}
   formated_latest=${DOCKER_PRIVATE_REGISTER}/"stable/${image}:latest"
  
fi

docker push "${formated}"
docker push "${formated_latest}"