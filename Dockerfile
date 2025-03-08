# Dockerfile
FROM php:7.4-fpm

# Install Laravel dependencies and extensions
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libpng-dev \
    libjpeg-dev

RUN docker-php-ext-configure gd --with-jpeg
RUN docker-php-ext-install gd pdo pdo_mysql

# INSTALL AND UPDATE COMPOSER
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www

# Copy your Laravel application into the container
COPY . .

# Install Composer dependencies
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000

