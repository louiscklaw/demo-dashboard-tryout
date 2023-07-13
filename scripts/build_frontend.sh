#!/usr/bin/env bash

set -ex

REGISTRY=192.168.10.61:5000

cd frontend/app
  docker build . -t 192.168.10.61:5000/dashboard-demo-frontend
cd -

docker push 192.168.10.61:5000/dashboard-demo-frontend
# docker run -it 192.168.10.61:5000/dashboard-demo-frontend bash
