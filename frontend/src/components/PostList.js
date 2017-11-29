import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PostSummaryView from './PostSummaryView';

class PostList extends Component {
  render() {
    const { posts, handleVote } = this.props;

    return (
      <Item.Group relaxed>
        {posts &&
          posts.length > 0 &&
          posts.map(post => (
            <PostSummaryView
              key={post.id}
              post={post}
              handleVote={handleVote}
            />
          ))}
        {(!posts || posts.length === 0) && (
          <Item>
            <Item.Content>
              <Item.Header>No posts found.</Item.Header>
            </Item.Content>
          </Item>
        )}
      </Item.Group>
    );
  }
}

export default PostList;
