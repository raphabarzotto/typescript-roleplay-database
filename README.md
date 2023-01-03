# Typescript Roleplay Database
Simple API based in a simple MySQL database built using express in Typescript

Project was made in August 2022 as a part of [Trybe's Back-end Course](https://www.betrybe.com/)

# How to Install
You can use any of the methods to install.

To test it, you can use any API client like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).
<details>
  <summary><strong>Locally</strong></summary>

  1. `npm install`
  2. create a `.env` file based on `.env.example`
  3. run query contained in `RunThis.sql` in mysql to create and seed database
  4. `npm start`
</details>
<details>
  <summary><strong>Docker</strong></summary>

  1. `docker-compose up -d` &rarr; to install container
  2. run query contained in `RunThis.sql` in mysql container created to create and seed database
  3. `docker exec -it roleplay bash` &rarr; to enter container
  4. `npm install`
  5. `npm start`
</details>

# API's routes
1. `POST /products`
  - body should look like this:
  ```json
  {
    "name": "Strong Health Potion",
    "amount": "30 gold coins"
  }
  ```
    - if right, should return `id`, `name` and `amount`:
  ```json
  {
    "id": 1,
    "name": "Strong Health Potion",
    "amount": "30 gold coins"
  }
  ```
2. `GET /products`
  - should return an array with all products
3. `POST /users`
  - body should look like this:
  ```json
  {
    "username": "MAX",
    "classe": "swordsman",
    "level": 10,
    "password": "SavingPeople"
  }
  ```
  - if user is able to sign up with correct data, should return a token:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
  ```
4. `GET /orders`
  - should return an array with all orders
5. `POST /login`
  - body should look like this:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
  - if user is able to login with correct data, should return a token:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
  ```
6. `POST /orders`
  - body should look like this:
  ```json
  {
    "productsIds": [1, 2]
  }
  ```
  - if everything is ok, should return a HTTP status 201