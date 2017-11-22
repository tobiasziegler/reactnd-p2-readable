import { combineReducers } from 'redux';

import { RECEIVE_ALL_POSTS, RECEIVE_ALL_CATEGORIES } from '../actions';

function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
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

export default combineReducers({ posts: posts, categories: categories });
