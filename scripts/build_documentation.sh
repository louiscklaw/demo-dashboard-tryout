#!/usr/bin/env bash

set -ex

REGISTRY=192.168.10.61:5000

cd documentation
  docker build . -t 192.168.10.61:5000/dashboard-demo-documentation
cd -

docker push 192.168.10.61:5000/dashboard-demo-documentation
# docker run -it 192.168.10.61:5000/dashboard-demo-documentation bash
