FROM php:8.1-apache

# Instala dependências e mysqli
RUN apt-get update && apt-get install -y default-mysql-client \
    && docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli

# Ativa mod_rewrite
RUN a2enmod rewrite

# Configura .htaccess uso
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# Copia app
COPY src/ /var/www/html/
