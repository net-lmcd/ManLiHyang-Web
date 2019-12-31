#!/bin/bash
AWS_PROFILE=$1
IMAGE_NAME=front-dev
REGISTRY_URL=507341129552.dkr.ecr.ap-northeast-2.amazonaws.com/${IMAGE_NAME}:latest
HOST=ubuntu@13.124.236.28
PEM_FILE=~/.ssh/noah.pem
APP_PATH=/home/ubuntu/${IMAGE_NAME}
DOCKER_COMPOSE=docker-compose.yml

function errorCheck() {
  if [[ $? -ne 0 ]]; then
    exit 1
  fi
}

set -e

npm run build
errorCheck

docker build -t ${IMAGE_NAME} .
errorCheck

docker tag ${IMAGE_NAME}:latest ${REGISTRY_URL}
errorCheck

ECR_LOGIN=$(aws ecr get-login --no-include-email --region ap-northeast-2 --profile ${AWS_PROFILE})
eval ${ECR_LOGIN}

docker push ${REGISTRY_URL}
errorCheck

ssh ${HOST} -i ${PEM_FILE} "sudo "${ECR_LOGIN}" && sudo docker pull "${REGISTRY_URL}""
errorCheck

ssh ${HOST} -i ${PEM_FILE} "mkdir -p ${APP_PATH}"
errorCheck

scp -i ${PEM_FILE} -d ./docker-compose.yml ${HOST}:${APP_PATH}
errorCheck

ssh ${HOST} -i ${PEM_FILE} "sudo docker-compose -f "${APP_PATH}"/docker-compose.yml -p ${IMAGE_NAME} up -d --remove-orphans"
errorCheck

ssh ${HOST} -i ${PEM_FILE} "sudo docker image prune -f"
docker image prune -f

echo "Deploy Success!"