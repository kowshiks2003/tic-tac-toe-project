FROM ubuntu:latest
RUN apt-get update && apt-get upgrade
RUN apt-get install nginx -y
COPY . /var/www/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off:"]
