# Use the official Node.js 21.6.2 image as a parent image
FROM node:21.6.2

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]