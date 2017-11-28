import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions';
import { Menu, Modal, Button } from 'semantic-ui-react';

class CommentDeleteModal extends Component {
  state = { modalOpen: false };

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalDelete = () => {
    this.props.dispatch(deleteComment(this.props.comment));

    this.setState({ modalOpen: false });
  };

  handleModalCancel = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Menu.Item onClick={this.handleModalOpen}>Delete Comment</Menu.Item>
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
    );
  }
}

export default connect()(CommentDeleteModal);
