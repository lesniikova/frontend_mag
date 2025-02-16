# Use Node 18 (or later) to match Angular requirements
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to optimize Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app
RUN npm run build

# Expose the correct port
EXPOSE 80

# Use a lightweight web server to serve the built Angular app
RUN npm install -g http-server
CMD ["http-server", "dist/frontend-mag", "-p", "80"]
