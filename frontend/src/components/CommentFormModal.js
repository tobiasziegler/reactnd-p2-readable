import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, updateComment } from '../actions';
import { Modal, Form, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';

class CommentFormModal extends Component {
  state = {
    // Set state based on existing comment, or set basic defaults for a new comment
    comment: {
      author: this.props.comment ? this.props.comment.author : '',
      body: this.props.comment ? this.props.comment.body : ''
    },
    modalOpen: false
  };

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalSubmit = e => {
    e.preventDefault();

    const { comment } = this.state;

    // Check whether editing a comment or creating a new one, then create or update it
    if (this.props.comment) {
      const updatedComment = {
        ...this.props.comment,
        timestamp: Date.now(),
        author: comment.author,
        body: comment.body
      };

      this.props.dispatch(updateComment(updatedComment));
    } else {
      const newComment = {
        id: v4(),
        timestamp: Date.now(),
        body: comment.body,
        author: comment.author,
        parentId: this.props.post_id
      };

      this.props.dispatch(addComment(newComment));
    }

    // Reset the comment form after submission
    this.setState({
      comment: {
        author: '',
        body: ''
      }
    });
    this.setState({ modalOpen: false });
  };

  handleModalCancel = e => {
    e.preventDefault();

    this.setState({
      comment: {
        author: this.props.comment ? this.props.comment.author : '',
        body: this.props.comment ? this.props.comment.body : ''
      },
      modalOpen: false
    });
  };

  handleChange = (e, v) => {
    // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    this.setState(prevState => ({
      comment: {
        ...prevState.comment,
        [v.name]: v.value
      }
    }));
  };

  // Used in rendering for clarity - if a comment has been passed via props, this is an edit post form
  isNewComment = () => {
    return this.props.comment ? false : true;
  };

  render() {
    const { comment } = this.state;
    const newComment = this.isNewComment();

    return (
      <Modal
        trigger={
          newComment ? (
            <Button size="tiny" onClick={this.handleModalOpen}>
              Add a Comment
            </Button>
          ) : (
            <Button icon="edit" content="Edit" onClick={this.handleModalOpen} />
          )
        }
        open={this.state.modalOpen}
        onClose={this.handleModalCancel}
      >
        {newComment ? (
          <Modal.Header>Add a Comment</Modal.Header>
        ) : (
          <Modal.Header>Edit Comment</Modal.Header>
        )}
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
