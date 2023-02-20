# Readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Created using React.js, Redux, and react-beautiful-dnd.
Yarn was used as a package manager.
The styled-components library was also used to style the components.
The project also includes ESLint for linting the code.

## Getting started
To get started with this project, you can either clone this repository or download the source code as a ZIP file. After that, you can run the following command to install the dependencies:

```
yarn install
```
Once the dependencies are installed, you can run the project using the following command:

```
yarn start
```  
## Available Scripts
In the project directory, you can run:

```
yarn start
```
Runs the app in the development mode.

```
yarn build
```
Builds the app for production to the build folder.

```
yarn test
```
Launches the test runner in the interactive watch mode.

```
yarn run deploy
```
Builds the project and publishes it on gh-pages.

## Code Optimization
The following techniques were used to optimize the code:

### Lazy Loading
Lazy loading is used to improve the performance of the application by loading components only when they are required. The SelectionWindowLazy component is loaded lazily using React.lazy().

### Memoization
Memoization is used to optimize the rendering of components by caching the result of expensive computations. The Table component is memoized using React.memo().
