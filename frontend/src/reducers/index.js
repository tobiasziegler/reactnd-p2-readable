import { combineReducers } from 'redux';

import { RECEIVE_ALL_POSTS } from '../actions';

function posts(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
}

export default combineReducers({ posts: posts });
