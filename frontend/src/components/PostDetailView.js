import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Item } from 'semantic-ui-react';
import moment from 'moment';
import CategoryList from './CategoryList';

class PostDetailView extends Component {
  render() {
    const { post } = this.props;

    return (
      <Grid>
        <Item.Group relaxed>
          {post && (
            <Item key={post.id}>
              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Description>{post.body}</Item.Description>
                <Item.Meta>
                  {moment(post.timestamp).fromNow()} by {post.author} in{' '}
                  {post.category}
                </Item.Meta>
                <Item.Extra>
                  Votes: {post.voteScore} | Comments: {post.commentCount}
                </Item.Extra>
              </Item.Content>
            </Item>
          )}
          {!post && (
            <Item>
              <Item.Content>
                <Item.Header>Post not found.</Item.Header>
              </Item.Content>
            </Item>
          )}
        </Item.Group>
        <CategoryList />
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.filter(
      post => post.id === ownProps.match.params.post_id
    )[0]
  };
};

export default connect(mapStateToProps)(PostDetailView);
