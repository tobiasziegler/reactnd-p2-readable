import { combineReducers } from 'redux';

import {
  RECEIVE_ALL_POSTS,
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_COMMENTS,
  SET_SORT_ORDER,
  POST_ADDED,
  POST_UPDATED,
  POST_DELETED,
  COMMENT_ADDED
} from '../actions';

function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.data;
    case POST_ADDED:
      return [...state, action.data];
    case POST_UPDATED:
      return state.map(
        post => (post.id === action.data.id ? action.data : post)
      );
    case POST_DELETED:
      return state.filter(post => post.id !== action.data.id);
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
    case COMMENT_ADDED:
      return [...state, action.data];
    default:
      return state;
  }
}

function sortOrder(state = 'latest', action) {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.sortOrder;
    default:
      return state;
  }
}

export default combineReducers({
  posts: posts,
  categories: categories,
  comments: comments,
  sortOrder: sortOrder
});
