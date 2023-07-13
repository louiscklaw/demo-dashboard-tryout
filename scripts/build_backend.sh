#!/usr/bin/env bash

set -ex

REGISTRY=192.168.10.61:5000

cd backend/node-app
  docker build . -t 192.168.10.61:5000/dashboard-demo-backend-node-app
cd -

docker push 192.168.10.61:5000/dashboard-demo-backend-node-app
# docker run -it 192.168.10.61:5000/dashboard-demo-frontend bash
