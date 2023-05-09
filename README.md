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

You can check out our API documentation [here](/docs/API.md).

## Future Steps

Due to having a time constraint on this project, there are various features that we were not able to add, but would like to add given the opportunity.

Here are some of them:
- Make the web application responsive.
- Have more resources for each language.
- Add more languages which resources are provided for.
- Give users the ability to bookmark certain resources, and be able to view their bookmarks in the Profile tab.
- Update goals page so it is more functional with better CSS and no bugs.

## Demo Video

You can watch our demo video [here](https://www.youtube.com/watch?v=EjI0xuHvsbo&ab_channel=ray).