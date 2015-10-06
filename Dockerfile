FROM nginx

ENV VERSION 0.1

COPY deploy/nginx/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]