import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions';
import { Comment, Menu, Modal, Button } from 'semantic-ui-react';
import moment from 'moment';

class CommentView extends Component {
  state = { modalOpen: false };

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalDelete = () => {
    this.props.dispatch(deleteComment(this.props.comment));

    this.setState({ modalOpen: false });
  };

  // Close the modal and reset the state
  handleModalCancel = () => this.setState({ modalOpen: false });

  render() {
    const { comment } = this.props;

    return (
      <Comment>
        <Comment.Content>
          <Comment.Author>{comment.author}</Comment.Author>
          <Comment.Metadata>
            {moment(comment.timestamp).fromNow()}
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Menu size="mini" compact>
            <Modal
              trigger={
                <Menu.Item onClick={this.handleModalOpen}>
                  Delete Comment
                </Menu.Item>
              }
              open={this.state.modalOpen}
              onClose={this.handleModalCancel}
            >
              <Modal.Header>Delete Comment</Modal.Header>
              <Modal.Content>
                Are you sure you want to delete this comment?
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.handleModalDelete}>Delete</Button>
                <Button onClick={this.handleModalCancel}>Cancel</Button>
              </Modal.Actions>
            </Modal>
          </Menu>
        </Comment.Content>
      </Comment>
    );
  }
}

export default connect()(CommentView);
