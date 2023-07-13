#!/usr/bin/env bash
#
set -x

git pull

npm run docker:prod
