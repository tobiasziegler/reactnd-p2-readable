# Readable

Readable is a content and comment web app. Users are able to post content to
predefined categories, comment on their posts and other users' posts, and vote
on posts and comments. Users are also able to edit and delete posts and
comments.

I've built this app as part of
[Udacity's React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

## Running the App

To run, test and develop Readable on your local computer:

1. Fork, clone or download this repository

1. Install and start the API (back-end) server

   1. `cd api-server`
   1. `npm install`
   1. `node server`

1. In another terminal window, use Create React App to scaffold out the
   front-end

   1. `cd frontend`
   1. `yarn install` or `npm install`
   1. `yarn start`

1. A browser window should open automatically, but you can load the app at
   http://localhost:3000

## About the App

The Readable user interface is built using [React](https://reactjs.org/) and
data (state) management is handled by [Redux](https://redux.js.org/). Other
tools and frameworks used in the project include:

* [React Router](https://reacttraining.com/react-router/) for routing
* [Semantic UI React](https://react.semantic-ui.com/introduction) for UI
  components
* [Redux Thunk](https://github.com/gaearon/redux-thunk) for asynchronous Redux
  actions
* [uuid](https://github.com/kelektiv/node-uuid) for generating post and comment
  IDs
* [Moment.js](https://momentjs.com/) for formatting and displaying timestamps
* [Prettier](https://prettier.io/) for code formatting

## API Server

Information about the API server and how to use it can be found in its
[README file](api-server/README.md).
