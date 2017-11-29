import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, votePost } from '../actions';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Item, Label, Menu, Modal, Button } from 'semantic-ui-react';
import moment from 'moment';
import CommentList from './CommentList';
import Votes from './Votes';

class PostDetailView extends Component {
  state = { modalOpen: false, redirect: false };

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalDelete = () => {
    this.props.dispatch(deletePost(this.props.post));

    this.setState({ modalOpen: false, redirect: true });
  };

  handleModalCancel = () => this.setState({ modalOpen: false });

  handleVote = (post, vote) => this.props.dispatch(votePost(post, vote));

  render() {
    const { post } = this.props;
    const { redirect } = this.state;

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
                  <Votes item={post} handleVote={this.handleVote} />
                  <Label floated="left">Comments: {post.commentCount}</Label>
                  <Menu size="mini" floated="right">
                    <Menu.Item
                      as={Link}
                      to={`/${post.category}/${post.id}/edit`}
                    >
                      Edit Post
                    </Menu.Item>
                    <Modal
                      trigger={
                        <Menu.Item onClick={this.handleModalOpen}>
                          Delete Post
                        </Menu.Item>
                      }
                      open={this.state.modalOpen}
                      onClose={this.handleModalCancel}
                    >
                      <Modal.Header>Delete Post</Modal.Header>
                      <Modal.Content>
                        Are you sure you want to delete this post?
                      </Modal.Content>
                      <Modal.Actions>
                        <Button onClick={this.handleModalDelete}>Delete</Button>
                        <Button onClick={this.handleModalCancel}>Cancel</Button>
                      </Modal.Actions>
                    </Modal>
                  </Menu>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          <CommentList post_id={post.id} />
          {redirect && <Redirect to="/" />}
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
