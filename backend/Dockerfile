# Step 1: Use official Node.js image
FROM node:22

# Step 2: Set working directory
WORKDIR /usr/src/app

# Step 3: Install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the app
COPY . .

# Step 5: Expose the backend API port
EXPOSE 5000

# Step 6: Run the backend server
CMD ["node", "server.mjs"]
