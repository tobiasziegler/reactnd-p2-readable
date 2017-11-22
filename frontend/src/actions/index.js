import * as API from '../utils/api';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveAllPosts = data => ({ type: RECEIVE_ALL_POSTS, data });

export const getAllPosts = () => dispatch =>
  API.getAllPosts().then(data => dispatch(receiveAllPosts(data)));

export const receiveAllCategories = data => ({
  type: RECEIVE_ALL_CATEGORIES,
  data
});

export const getAllCategories = () => dispatch =>
  API.getAllCategories().then(data => dispatch(receiveAllCategories(data)));
