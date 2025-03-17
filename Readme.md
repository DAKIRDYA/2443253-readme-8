# Личный проект «Readme»

# https://github.com/DAKIRDYA/2443253-readme-8
# Курс - Node.js и Nest.js. Микросервисная архитектура.
# Профессия - "Фулстек-разработчик"
# Онлайн академия HTML Academy (https://htmlacademy.ru)

# Язык программирования TypeScript. Node.Js
# Фреймворк Nest.Js

# Студент: [Дима Кирдяшкин].

# Техническое задание представлено в файле task.md


### Инструкция



# 1. Создайте форк (для редактирования и дополнения проекта)

Откройте репозиторий и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из будет скопирован в ваш аккаунт.

# 2. Клонируйте репозиторий на свой компьютер

```
git clone адрес_вашего_форка
```

# 3. Откройте директорий проекта из вашего редактора (например, из Visual Studio Code)

# 4. Установите зависимости с помощью команды в терминале редактора

```
npm install
```


# 5. Рабочая директория проекта /project. Проект состоит из 4-х микросервисов (приложений). Общая схема представлена в файле /Specification.png.: 
### Микросервис Account (на схеме представлен блоком Users), рабочая папка - apps/account. Данное приложение реализует все операции по    работе с пользователями. Работает с БД Mongo DB
### Микросервис Publications (на схеме представлен блоком Publications), рабочая папка - apps/publications. Данное приложение реализует все операции по работе с публикациями. Работает с БД PostgreSQL
### Микросервис Notify (на схеме представлен блоком Notify), рабочая папка - apps/notify. Данное приложение реализует рассылку уведомлений о появлении новых публикаций. Работает с БД Mongo DB
### Микросервис Api (на схеме представлен блоком Api Gateway), рабочая папка - apps/api. Данное приложение реализует взаимодействие внешнего клиента со всеми остальными микросервисами.

# Для запуска проекта необходимо:
# 5.1 Создать конфигурационные файлы .env в рабочих директориях каждого микросервиса. Заполнить их, используя структуру в примерах конфигурационных файлов - .env-example, находящиеся в соотв. директориях.

# 5.2 Создать экземпляры БД MongoDB в Docker для приложений notify и account и БД PostgreSQL для микросервиса publications. Необходимо предварительно установить и запустить платформу Docker в вашей системе.
Для этого выполните пожалуйста в терминале следующую команду находясь в директории соотв. приложения, и, предварительно сконфигурировав файл docker-compose.dev.yml для каждого приложения. Проверьте, чтобы данные по подключению к БД (строка URI) совпадали с данными из .env файла.
> docker compose --file ./docker-compose.dev.yml --env-file .env --project-name "notify" up -d

> docker compose --file ./docker-compose.dev.yml --env-file .env --project-name "account" up -d

> docker compose --file ./docker-compose.dev.yml --env-file .env --project-name "publications" up -d

# 5.3 Установить и запустить Rabbit MQ brocker. Проверить его порт в .env файлах микросервисов
# 5.4 Запустить каждый из микросервисов в отдельных терминалах (выполнять запуск из корневой директории проекта) командами:

> npx nx run account:serve

> npx nx run publications:serve

> npx nx run notify:serve

> npx nx run api:serve


# 6 Тестовые запросы по работе с приложением находятся в файлах app_like_comment.http (работа с комментариями, лайками), 
# app_user_blog.http (работа с пользователями, публикациями) в директории project\apps\api\src\app\
### Необходимо учитывать ряд запросов требует авторизации. Поэтому сначала выполнить запрос по созданию нового пользователя и его авторизации. Ряд запросов требует авторизационный токен (Bearer), он может быть получен в результате авторизации.

//-----------------------------------------------------------------------------------------
### Примеры команд:

### Создать нового пользователя
### Войти по email и паролю ("Залогиниться")
### Получить новые токены
### Подписаться на публикации другого пользователя
### Отписаться на публикации другого пользователя
### Поменять пароль у пользователя
### Разослать уведомления пользователям о новых публикациях
### Создать новый пост
### Удалить публикация по id
### Обновить публикацию по id
### Создать репост публикации с определенным id
### Получить все публикации
### Получить публикацию по id (просмотр детальной информации)
### Получить публикации с сортировкой и фильтрацией
### Получить контентную ленту публикаций на подписанных пользователей с сортировкой и фильтрацией

### находятся в файле
`project\apps\api\src\app\app_user_blog.http`
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
### Примеры команд:

### Войти по email и паролю ("Залогиниться")
### Получить все комментарии для публикации
### Создать новый комментарий для публикации с определенным id
### Удалить свой комментарий с определенным id
### Поставить лайк для публикации с определенным id
### Удалить лайк для публикации с определенным id

### находятся в файле
`project\apps\api\src\app\app_like_comment.http`
//-----------------------------------------------------------------------------------------






### Исходный код проекта находится в директории /project.

  src/apps - общая директория микросервисов

  src/libs - дополнительные библиотеки: 

  src/libs/blog модель Prisma для микросервиса publivations

  src/libs/file-vault - модуль для загрузки аватарок и изображений в публикациях

  src/libs/notify - модуль для работы с подписками и рассылками уведомлений через Rabbit MQ broker

  src/libs/shared - библиотеки для работы с БД для каждого из микросервисов, базовые классы

  src/shareable - общие константы
  
  src/testmail - шаблон сообщения для рассылки уведомлений
  
### /markup -  Исходная разметка для фронтендной части проекта.

### Для просмотра всей структуры проекта наберите команду 
> npx nx graph
