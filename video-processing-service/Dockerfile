# This file will be overdocumented because I am not great with docker.
# just making sure I understand whats going on

# Use an official Node runtime as parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Install ffmpeg in the container
RUN apt-get update && apt-get install -y ffmpeg

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install all dependencies specified in package.json
RUN npm install

# Copy app souce inside docker image
COPY . .

# Port-forward / expose port 3000 outside the container
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]