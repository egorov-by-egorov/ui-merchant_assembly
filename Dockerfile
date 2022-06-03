FROM nginx:1.19
ADD default.conf /etc/nginx/conf.d/default.conf
ADD build/ /var/www/html
