# Base Image
FROM node:14-alpine as builder
#Set working directory
WORKDIR '/app'
# Install some dependencies
COPY package.json .
RUN npm install
# Copy the rest of the files
COPY . .
# Build the project
RUN npm run build
#------------------------------------------------
FROM nginx 
COPY --from=builder /app/build /usr/share/nginx/html

