# Laravel-Vue Starter

A fork of Laravel, prepared as I like to use it:

-   [x] [Config defaults](https://github.com/j4kim/laravel-vue-starter/commit/4b536c45e6f85d33209eb535b3c1edae73d806f0)
-   [x] Remove Pail in `composer run dev`
-   [ ] A mechanism to log SQL queries
-   [ ] A vue SPA for front-end, using Laravel as an API
-   [ ] Ziggy to share routes
-   [ ] Sanctum authentication
-   [ ] Webcron handler

## Install

```
composer create-project j4kim/laravel-vue-starter {project-name}
```

## Setup

```
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan storage:link
php artisan migrate
php artisan db:seed
```

## Run

```
composer run dev
```
