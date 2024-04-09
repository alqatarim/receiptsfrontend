# Use Node.js LTS version as base image
FROM node:slim

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json ./

RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
