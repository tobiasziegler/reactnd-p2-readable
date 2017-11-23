import { combineReducers } from 'redux';

import {
  RECEIVE_ALL_POSTS,
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_COMMENTS
} from '../actions';

function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.data;
    default:
      return state;
  }
}

function categories(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.data.categories;
    default:
      return state;
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  posts: posts,
  categories: categories,
  comments: comments
});
