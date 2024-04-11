# Use Node.js LTS version as base image
FROM node:slim

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

# for dev: RUN npm install

# for production:
RUN npm ci --only=production
# Copy the rest of the application code
COPY . ./

# Build the Next.js application

#production:
RUN npm run build

# Expose port 3000 for dev or 80 for prod
EXPOSE 80:80

# Run the application jj
CMD ["npm", "start"]
