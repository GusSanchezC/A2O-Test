FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginxinc/nginx-unprivileged
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/testweb/browser /usr/share/nginx/html