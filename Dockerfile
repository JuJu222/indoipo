FROM node:alpine AS base

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Define environment variables
ENV NODE_ENV production

# Start the Next.js application
CMD ["npm", "start"]
