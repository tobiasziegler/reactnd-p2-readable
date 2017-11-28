import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
import { Modal, Form, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';

class CommentFormModal extends Component {
  state = {
    comment: {
      author: '',
      body: ''
    },
    modalOpen: false
  };

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalSubmit = e => {
    e.preventDefault();

    const { comment } = this.state;

    const newComment = {
      id: v4(),
      timestamp: Date.now(),
      body: comment.body,
      author: comment.author,
      parentId: this.props.post_id
    };

    this.props.dispatch(addComment(newComment));

    // Reset the comment form after submission
    this.setState({
      comment: {
        author: '',
        body: ''
      }
    });
    this.setState({ modalOpen: false });
  };

  handleModalCancel = () =>
    this.setState({
      comment: {
        author: '',
        body: ''
      },
      modalOpen: false
    });

  handleChange = (e, v) => {
    // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    this.setState(prevState => ({
      comment: {
        ...prevState.comment,
        [v.name]: v.value
      }
    }));
  };

  render() {
    const { comment } = this.state;

    return (
      <Modal
        trigger={
          <Button size="tiny" onClick={this.handleModalOpen}>
            Add a Comment
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleModalCancel}
      >
        <Modal.Header>Add a Comment</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleModalSubmit} size="mini">
            <Form.Input
              required
              name="author"
              label="Author"
              placeholder="Author"
              value={comment.author}
              onChange={this.handleChange}
            />
            <Form.TextArea
              required
              name="body"
              label="Write your comment"
              placeholder="Write your comment"
              value={comment.body}
              onChange={this.handleChange}
            />
            <Button type="submit">Submit</Button>
            <Button onClick={this.handleModalCancel}>Cancel</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect()(CommentFormModal);
