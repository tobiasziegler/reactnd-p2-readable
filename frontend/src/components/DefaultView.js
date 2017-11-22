import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { Item } from 'semantic-ui-react';
import moment from 'moment';

class DefaultView extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
  };

  render() {
    const { posts } = this.props;
    return (
      <Item.Group relaxed>
        {posts &&
          posts.length > 0 &&
          posts.map(post => (
            <Item key={post.id}>
              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Meta>
                  {moment(post.timestamp).fromNow()} by {post.author} in{' '}
                  {post.category}
                </Item.Meta>
                <Item.Extra>
                  Votes: {post.voteScore} | Comments: {post.commentCount}
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

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(DefaultView);
