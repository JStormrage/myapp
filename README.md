# "Todo List" Node.js REST API Application

This is a simple Node.js REST API application that allows users to manage Todo items.
Built with Node.js, TypeScript, and Express.

## Getting Started

To get started with this application, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Build the application using `npm run build`.
4. Start the application using `npm start`.
5. Run tests: `npm test`.

The application should now be running on http://localhost:3000.

## To develop further I recommend using nodemon
### You might need to add nodemon to Environment Variable on Windows in Path, after nodemon


## API Endpoints

The following API endpoints are available:

- `GET /todos` - Returns the list of all Todos.
- `POST /todos` - Creates a new Todo.

### POST /todos

To create a new Todo, send a POST request to `/todos` with the following JSON payload:

json
{
  "content": "Buy groceries, etc"
}


The `content` field is required and cannot be blank.

### GET /todos

To view a list of all Todos, send a GET request to `/todos`.

## Running Tests

To run the unit tests, use `npm run test:unit`. To run the end-to-end tests, use `npm run test:e2e`.

## Docker

To run the application using Docker, use the following commands:

bash
docker build -t myapp .
docker run -p 3000:3000 myapp

## License

This application is licensed under the MIT License. See the LICENSE file for more information.

## Important for DEBUG

When the specified version of the uuid package cannot be found. There might be an issue with the package registry or the package itself. To resolve this issue, follow these steps:


1. Update your npm registry to the default one, in case it's set to a custom registry:

`npm config set registry https://registry.npmjs.org/`

2.Clear the npm cache:

`npm cache clean --force`

3.Delete the node_modules folder and the package-lock.json file in your project directory.

4. Run npm install again to reinstall the dependencies.

If the issue still persists, you can try installing the latest available version of uuid by running:

`npm install uuid@latest`
