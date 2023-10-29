FROM node:16 AS build

WORKDIR /app

# Copy the package.json and package-lock.json first, for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the React application
FROM node:16

WORKDIR /app

# Install serve to serve the app. You can use other servers as per your preference.
RUN npm install -g serve

# Copy the build folder from the build image
COPY --from=build /app/build /app/build

# Expose port 3000
EXPOSE 8080

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "8080"]
