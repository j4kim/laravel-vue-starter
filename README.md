# Laravel-Vue Starter

A fork of Laravel, prepared as I like to use it:

-   [x] Configuration defaults (4b536c45e6f85d33209eb535b3c1edae73d806f0)
-   [x] Remove Pail in `composer run dev` (62892a9a3acc9e694fa8e152435963171cc6f98d)
-   [x] A mechanism to log SQL queries (e1a560d2417b9ce266a2cfc8338735006a7f53e8)
-   [x] Don't wrap JsonResources (9ad2a6929a85325e5c36132f0008f68e1a292df5)
-   [x] Unguard all models (22ae7a8f9a2e41e1f9ce439d6e37dcbc940ef5b2)
-   [x] Add version in `config('app.version')` 7ea5cc9e7188f2448dc6d67d854e33d48b2c3355
-   [ ] A vue SPA for front-end, using Laravel as an API
-   [ ] Ziggy to share routes
-   [ ] Sanctum authentication
-   [ ] Webcron handler

## Install

```
composer create-project -s dev j4kim/laravel-vue-starter {project-name}
```

## Setup

```
composer run setup
```

## Run

```
composer run dev
```
