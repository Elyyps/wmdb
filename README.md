## Viper front end

This project is the initial Viper setup that prototypes all future React front end applications.

## Run the project

Please make sure to use Docker to run the project in order to ensure parity among development environments.
In order to start the project and run it on the localhost, use the following command:

> docker-compose up
> docker-compose up --build

## Pre-commits

Prettier: when commiting files they are automatically formatted using Prettier. Use the Prettier VSCode extension in order to format files
manually. Use the "Format on save" option to make sure files are always formatted correctly while developing.

Lint: the linter is run when files are commited to make sure files arent committed that don't follow our code conventions.
If the Linter fails, the files can't be committed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm lint`

Starts the Linter to check for code inconsistenties. Displays errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run start-server`

Starts a server that hosts the application using the build folder in the root. Make sure to run 'npm run build' to get the latest
version before serving it.
