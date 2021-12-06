FROM nginx:1.17.1-alpine

COPY ./dist/Dashboard /usr/share/nginx/html

