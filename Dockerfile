# Description: Dockerfile for the Node.js receiptsfrontendlication
FROM node:21-slim

# Setting up the work directory
WORKDIR /receiptsfrontend

# Installing dependencies
COPY ./package*.json /receiptsfrontend

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our receiptsfrontendlication
CMD ["npm","start"]