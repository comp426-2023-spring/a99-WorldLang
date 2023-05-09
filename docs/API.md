# API 

## Users and Interactions Database
- The application uses a MongoDB database called `worldlang`.
- The database has two collections: `users` and `interactions`.
- The `users` collection stores information about users such as their name, email, username, and password.
- The `interactions` collection stores information about user actions such as registering, updating their account, or deleting their account, along with a timestamp.

## API Endpoints

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