# from node:latest
FROM node:latest


MAINTAINER Rania Sayed <raniasayed313@gmail.com>


ENV SRC /usr/src/cli/

run mkdir $SRC
workdir $SRC

copy . .
copy ./package.json package.json
run npm link

run npm install
