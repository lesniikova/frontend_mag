FROM --platform=linux/amd64 node:18-alpine
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
COPY . app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]