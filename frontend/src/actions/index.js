import * as API from '../utils/api';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const POST_ADDED = 'POST_ADDED';
export const POST_UPDATED = 'POST_UPDATED';
export const POST_DELETED = 'POST_DELETED';
export const COMMENT_ADDED = 'COMMENT_ADDED';
export const COMMENT_DELETED = 'COMMENT_DELETED';
export const COMMENT_UPDATED = 'COMMENT_UPDATED';
export const POST_VOTED = 'POST_VOTED';

export const receiveAllPosts = data => ({ type: RECEIVE_ALL_POSTS, data });

export const getAllPosts = () => dispatch =>
  API.getAllPosts().then(data => dispatch(receiveAllPosts(data)));

export const receiveAllCategories = data => ({
  type: RECEIVE_ALL_CATEGORIES,
  data
});

export const getAllCategories = () => dispatch =>
  API.getAllCategories().then(data => dispatch(receiveAllCategories(data)));

export const receiveComments = data => ({
  type: RECEIVE_COMMENTS,
  data
});

export const getComments = post_id => dispatch =>
  API.getComments(post_id).then(data => dispatch(receiveComments(data)));

export const setSortOrder = sortOrder => ({ type: SET_SORT_ORDER, sortOrder });

export const postAdded = data => ({
  type: POST_ADDED,
  data
});

export const addPost = post => dispatch =>
  API.addPost(post).then(data => dispatch(postAdded(data)));

export const postUpdated = data => ({
  type: POST_UPDATED,
  data
});

export const updatePost = post => dispatch =>
  API.updatePost(post).then(data => dispatch(postUpdated(data)));

export const postDeleted = data => ({ type: POST_DELETED, data });

export const deletePost = post => dispatch =>
  API.deletePost(post).then(data => dispatch(postDeleted(data)));

export const commentAdded = data => ({ type: COMMENT_ADDED, data });

export const addComment = comment => dispatch =>
  API.addComment(comment).then(data => dispatch(commentAdded(data)));

export const commentUpdated = data => ({ type: COMMENT_UPDATED, data });

export const updateComment = comment => dispatch =>
  API.updateComment(comment).then(data => dispatch(commentUpdated(data)));

export const commentDeleted = data => ({ type: COMMENT_DELETED, data });

export const deleteComment = comment => dispatch =>
  API.deleteComment(comment).then(data => dispatch(commentDeleted(data)));

export const postVoted = data => ({ type: POST_VOTED, data });

export const votePost = (post, vote) => dispatch =>
  API.votePost(post, vote).then(data => dispatch(postVoted(data)));
