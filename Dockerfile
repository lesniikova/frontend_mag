# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose the Angular dev server port
EXPOSE 4200

# Start the Angular development server
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
