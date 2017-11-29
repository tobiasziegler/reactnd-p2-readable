import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, votePost } from '../actions';
import { Link, Redirect } from 'react-router-dom';
import {
  Grid,
  Header,
  Item,
  Label,
  Modal,
  Button,
  Icon
} from 'semantic-ui-react';
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
                  <Label>
                    <Icon name="comments" /> {post.commentCount}
                  </Label>
                  <Button.Group size="mini" floated="right">
                    <Button
                      icon="edit"
                      content="Edit"
                      as={Link}
                      to={`/${post.category}/${post.id}/edit`}
                    />
                    <Modal
                      trigger={
                        <Button
                          icon="trash"
                          content="Delete"
                          onClick={this.handleModalOpen}
                        />
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
                  </Button.Group>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          <Header>Comments</Header>
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
