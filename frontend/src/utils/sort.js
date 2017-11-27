// Sort posts by a specified order - latest or most popular
export const sortByOrder = (posts, order) => {
  switch (order) {
    case 'latest':
      return posts.sort((a, b) => b.timestamp - a.timestamp);
    case 'popular':
      return posts.sort((a, b) => b.voteScore - a.voteScore);
    default:
      return posts;
  }
};
