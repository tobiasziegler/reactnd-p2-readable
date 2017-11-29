import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import moment from 'moment';
import Votes from './Votes';

class PostList extends Component {
  render() {
    const { posts, handleVote } = this.props;

    return (
      <Item.Group relaxed>
        {posts &&
          posts.length > 0 &&
          posts.map(post => (
            <Item key={post.id}>
              <Item.Content>
                <Item.Header as={Link} to={`/${post.category}/${post.id}`}>
                  {post.title}
                </Item.Header>
                <Item.Meta>
                  {moment(post.timestamp).fromNow()} by {post.author} in{' '}
                  {post.category}
                </Item.Meta>
                <Item.Extra>
                  <Votes item={post} handleVote={handleVote} />
                  Comments: {post.commentCount}
                </Item.Extra>
              </Item.Content>
            </Item>
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
