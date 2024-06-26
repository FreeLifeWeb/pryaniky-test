                Тестовое задание Frontend: Реализация SPA-приложения

## Описание проекта:

Это SPA-приложение разработано на React с использованием TypeScript и Material-UI для взаимодействия с сервером по заданному API. Приложение включает страницу авторизации и таблицу с данными, предоставляющую CRUD операции.

## Функциональные требования:

-   Авторизация:

-   При открытии приложения неавторизованный пользователь видит страницу авторизации.

## Для авторизации используются данные:

username: user{N}
password: password

-   После успешной авторизации пользователь перенаправляется на страницу с таблицей данных.
-   Состояние авторизации должно сохраняться после перезагрузки страницы.

## Таблица с данными:

-   Отображает данные, полученные с сервера.
-   Поддерживает операции CRUD (создание, чтение, обновление, удаление записей).
-   Добавление новой записи: новая запись должна мгновенно появляться в таблице.
-   Удаление записи: запись должна мгновенно исчезать из таблицы.
-   Изменение записи: изменения должны немедленно отображаться в таблице.

## Индикаторы загрузки:

-   При загрузке данных с сервера или отправке запросов пользователю показываются индикаторы загрузки (спиннеры, прогресс-бары).

## Обработка ошибок:

-   Пользователю должны корректно отображаться ошибки при заполнении форм или неудачных запросах к серверу.

## API сервера

Хост: https://test.v5.pryaniky.com

## Запросы к серверу

-   Авторизация

*   Метод: POST
    URL: {HOST}/ru/data/v3/testmethods/docs/login
    Параметры: { username: "userN", password: "password" }
    Ответ: токен для аутентификации (x-auth: <token>)
    Получение данных для таблицы

*   Метод: GET
    URL: {HOST}/ru/data/v3/testmethods/docs/userdocs/get
    Требуется аутентификация (x-auth: <token>)
    Ответ: массив данных для таблицы
    Добавление записи

*   Метод: POST
    URL: {HOST}/ru/data/v3/testmethods/docs/userdocs/create
    Требуется аутентификация (x-auth: <token>)
    Параметры: данные в JSON формате (см. пример в ТЗ)
    Ответ: созданная запись с HTTP статусом 200
    Удаление записи

*   Метод: POST
    URL: {HOST}/ru/data/v3/testmethods/docs/userdocs/delete/{id}
    Требуется аутентификация (x-auth: <token>)
    Параметры: id записи для удаления
    Ответ: error_code: 0 в случае успешного удаления
    Изменение записи

*   Метод: POST
    URL: {HOST}/ru/data/v3/testmethods/docs/userdocs/set/{id}
    Требуется аутентификация (x-auth: <token>)
    Параметры: id записи и данные в JSON формате (аналогично созданию записи)
    Ответ: error_code: 0 и измененный объект в свойстве data в случае успешного обновления

                                        ### Реализация ###

### Стек технологий:

-   CRA (Create React App)
-   Javascript
-   MUI
-   Redux toolkit
-   Css - модули
-   Пакетный менеджер NPM
-   React 18.2.0

### Операционная система:

-   MacOS

### Порядок запуска проекта:

-   Склонировать репозиторий
-   Открыть в терминале IDE папку client
-   ввести команду (npm i) для зависимостей
-   запустить проект командой (npm start)

### Ссылка на деплой (Versel):

- https://pryaniky-test.vercel.app/
