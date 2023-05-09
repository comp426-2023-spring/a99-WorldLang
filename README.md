# WorldLang

## Overview

Worldlang is an application which compiles various online resources to learn different languages. Currently, resources are offered for Arabic, Mandarin Chinese, German, and Spanish. Users can create an account by registering, or log in if they have already registered. From there, they will be able to browse different resources sorted by language. The resources include a description of that resource as well as a link which will open the resource in a new tab.

## How to run
1. Clone the repository.
2. Run `npm install` to install the dependencies needed.
3. Run `npm start` to start the server.
4. Open `localhost:3000/home` in your browser to view the application.
5. Users will be prompted to either log in or register at first. Once an account has been created or logged into, users will be able to see their account information in the Profile tab and different language resources in the tabs on the sidebar.
6. If you would like to log out, navigate to the Profile tab. A log out button should then appear on the sidebar.
7. To end the server, use `Ctrl + C`.

## Dependencies

- `body-parser`: ^1.20.2
  - Middleware to parse incoming request bodies in a middleware before your handlers.
  - Provides several parsers for different data formats, such as JSON, URL-encoded, etc.
- `cors`: ^2.8.5
  - Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.
  - Allows communication between different origins (domains, protocols, or ports).
- `ejs`: ^3.1.9
  - Embedded JavaScript templating engine for creating dynamic HTML content in Express applications.
  - Provides an easy way to generate HTML based on data received from the server.
- `express`: ^4.18.2
  - Fast, unopinionated, minimalist web framework for Node.js applications.
  - Provides a simple way to create a web server and handle HTTP requests and responses.
- `mongodb`: ^5.3.0
  - Official MongoDB driver for Node.js.
  - Provides a simple and efficient way to interact with MongoDB databases in Node.js applications.
- `@types/body-parser`: ^1.19.2
  - TypeScript type definitions for the `body-parser` package.
  - Provides type information to TypeScript files when using the `body-parser` package.
- `@types/cors`: ^2.8.13
  - TypeScript type definitions for the `cors` package.
  - Provides type information to TypeScript files when using the `cors` package.
- `@types/express`: ^4.17.17
  - TypeScript type definitions for the `express` package.
  - Provides type information to TypeScript files when using the `express` package.

## API 

### Users and Interactions Database
- The application uses a MongoDB database called `worldlang`.
- The database has two collections: `users` and `interactions`.
- The `users` collection stores information about users such as their name, email, username, and password.
- The `interactions` collection stores information about user actions such as registering, updating their account, or deleting their account, along with a timestamp.

### API Endpoints

### POST /app/register
- Registers a new user.
- Requires a name, email, username, and password.
- If the username already exists, returns a 400 status code with an error message.
- On success, creates a new user in the `users` collection and logs the registration action in the `interactions` collection.
- Returns a 201 status code with a success message.

### POST /app/login
- Logs in an existing user.
- Requires a username and password.
- If the user is not found or the password is incorrect, returns an error message with an appropriate status code.
- On success, returns the user object without the password field and a 200 status code.

### PUT /app/user
- Updates an existing user's information.
- Requires a username and accepts optional fields for name, email, and password.
- If the user is not found, returns a 404 status code with an error message.
- On success, updates the user's information in the `users` collection and logs the update action in the `interactions` collection.
- Returns a 200 status code with a success message.

### GET /app/user/:username
- Retrieves information about a user with the specified username.
- If the user is not found, returns a 404 status code with an error message.
- On success, returns the user object without the password field and a 200 status code.

### DELETE /app/user/:username
- Deletes an existing user account.
- If the user is not found, returns a 404 status code with an error message.
- On success, deletes the user from the `users` collection and logs the delete action in the `interactions` collection.
- Returns a 200 status code with a success message.

### GET /goals
- Renders a list of goals (todos) using the EJS template engine.
- Sends the list of todos stored in the `todos` array.

### POST /
- Adds a new todo to the `todos` array.
- Requires a todo task.
- On success, renders the updated list of goals (todos).

### POST /delete
- Deletes a todo from the `todos` array.
- Requires the todo ID.
- On success, redirects the user to the updated list of goals (todos).

### GET *
- Catch-all route that returns an "Invalid Page" message for requests to nonexistent routes.

## Future Steps

Due to having a time constraint on this project, there are various features that we were not able to add, but would like to add given the opportunity.

Here are some of them:
- Make the web application responsive.
- Have more resources for each language.
- Add more languages which resources are provided for.
- Give users the ability to bookmark certain resources, and be able to view their bookmarks in the Profile tab.
- Add a goals page in which users can create and update a list of language-learning goals they have.

## Demo Video

[WIP]
