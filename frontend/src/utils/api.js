// Configure server address and authorization header
const server = 'http://localhost:3001';
const authHeader = { Authorization: 'API key could go here' };

// Get all of the posts. Useful for the main page when no category is selected.
export const getAllPosts = () =>
  fetch(`${server}/posts`, { headers: authHeader }).then(response =>
    response.json()
  );

// Get all of the categories available for the app.
export const getAllCategories = () =>
  fetch(`${server}/categories`, { headers: authHeader }).then(response =>
    response.json()
  );

// Get all the comments for a single post
export const getComments = post_id =>
  fetch(`${server}/posts/${post_id}/comments`, { headers: authHeader }).then(
    response => response.json()
  );

// Add a new post
export const addPost = post =>
  fetch(`${server}/posts`, {
    headers: { ...authHeader, 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(post)
  }).then(response => response.json());

// Edit the details of an existing post
export const updatePost = post =>
  fetch(`${server}/posts/${post.id}`, {
    headers: {
      ...authHeader,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(post)
  }).then(response => response.json());
