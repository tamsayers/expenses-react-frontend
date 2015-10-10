FROM nginx

ENV VERSION 0.1

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/nginx/nginx.conf /etc/nginx/nginx.conf
COPY deploy/nginx/conf.d /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]