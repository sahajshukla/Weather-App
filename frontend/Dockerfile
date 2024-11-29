# Use official Node.js image to build the frontend
FROM node:22

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the frontend
RUN npm run build

# Expose port 80 for the frontend
EXPOSE 80

CMD [ "npm", "start" ]

