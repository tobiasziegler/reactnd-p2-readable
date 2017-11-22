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
