FROM almalinux:8

# Update the system
RUN yum -y update

# Install Apache HTTP Server
RUN yum install -y httpd

# Copy HTML, CSS, JS Files to the Apache directory
COPY index.html /var/www/html/index.html
COPY styles.css /var/www/html/styles.css
COPY script.js /var/www/html/script.js
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start the Apache HTTP Server in the foreground
CMD ["httpd", "-D", "FOREGROUND"]
