FROM node:23-alpine3.20
RUN mkdir app
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile
COPY . .
EXPOSE 3000
RUN npm run build
CMD npm start