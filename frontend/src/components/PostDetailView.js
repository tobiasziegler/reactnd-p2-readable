import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Item, Label, Menu } from 'semantic-ui-react';
import moment from 'moment';
import CommentList from './CommentList';

class PostDetailView extends Component {
  render() {
    const { post } = this.props;

    if (post) {
      return (
        <Grid.Column width={10}>
          <Item.Group relaxed>
            <Item key={post.id}>
              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Description>{post.body}</Item.Description>
                <Item.Meta>
                  {moment(post.timestamp).fromNow()} by {post.author} in{' '}
                  {post.category}
                </Item.Meta>
                <Item.Extra>
                  <Label floated="left">
                    Votes: {post.voteScore} | Comments: {post.commentCount}
                  </Label>
                  <Menu size="mini" floated="right">
                    <Menu.Item
                      as={Link}
                      to={`/${post.category}/${post.id}/edit`}
                    >
                      Edit Post
                    </Menu.Item>
                  </Menu>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          <CommentList post_id={post.id} />
        </Grid.Column>
      );
    } else {
      return (
        <Grid.Column width={10}>
          <Item.Group relaxed>
            <Item>
              <Item.Content>
                <Item.Header>Post not found.</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      );
    }
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
