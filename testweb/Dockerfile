FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=0 /app/dist/testweb /usr/share/nginx/html
EXPOSE 80