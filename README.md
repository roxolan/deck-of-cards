# Deck of Cards
### (non-redux version)

### General Explanation
This is a non-redux version of the 'Deck of Cards' assignment. It has been assumed that this code will be a foundational part for a new product (most likely involving at least some persistence layer and frontent later). In order to achieve this, the following measures were taken:
- The code is organized in the form of an Express application, which will later facilitate adding middleware layers and creating API endpoints for the client side.
- The app uses mocha/chai for unit testing. All new code is covered with unit tests to ensure code quality.
- JavaScript Standard Style is ensured by using 'standard' library as a linter.

### Using specific libraries
#### lodash
_.times() and _.map() are used.

#### webpack
Webpack ver. 3.3.0 is used to:

- assemble backend bundle to be server as a Node app:
```
webpack
```
- run webpack-dev-server:
```
npm run webpack
```

### Running the app
#### main app.js in console
With babel presets declared in .babelrc, run babel-node from the root of the app:
```
babel-node server/src/app.js
```
#### Express app
To run the app as a server:
```
webpack
npm run start
```
The deck of cards in the form of shuffled array of 52 Card objects will be available at [localhost:7000](http://localhost:7000/)

### Deck & Card classes
The core logic for requested classes [is located here](https://github.com/roxolan/deck-of-cards/blob/master/server/src/deck.js)
