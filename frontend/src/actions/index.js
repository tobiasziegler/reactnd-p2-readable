import * as API from '../utils/api';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

export const receiveAllPosts = posts => ({ type: RECEIVE_ALL_POSTS, posts });

export const getAllPosts = () => dispatch =>
  API.getAllPosts().then(data => dispatch(receiveAllPosts(data)));
