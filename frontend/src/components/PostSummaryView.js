import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import { Link } from 'react-router-dom';
import { Item, Label, Icon, Button, Modal } from 'semantic-ui-react';
import moment from 'moment';
import Votes from './Votes';

class PostSummaryView extends Component {
  state = { modalOpen: false, redirect: false };

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalDelete = () => {
    this.props.dispatch(deletePost(this.props.post));

    this.setState({ modalOpen: false });
  };

  handleModalCancel = () => this.setState({ modalOpen: false });

  render() {
    const { post, handleVote } = this.props;

    return (
      <Item>
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
    );
  }
}

export default connect()(PostSummaryView);
