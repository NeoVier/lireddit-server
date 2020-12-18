#!/bin/bash

echo What should the version be?
read VERSION

docker build -t henriquebuss/lireddit:$VERSION .

docker push henriquebuss/lireddit:$VERSION

echo What is the ssh host?
read SSH_HOST

ssh SSH_HOST "docker pull henriquebuss/lireddit:$VERSION && docker tag henriquebuss/lireddit:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"