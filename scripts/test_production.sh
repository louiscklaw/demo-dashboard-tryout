#!/usr/bin/env bash
#
set -x

git pull

npm run docker:prod

docker compose pull

pushd backend/node-app
  npm run prod:seed
popd
