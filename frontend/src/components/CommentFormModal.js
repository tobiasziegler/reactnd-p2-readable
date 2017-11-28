import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
import { Form, Divider, Header, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';

class CommentFormModal extends Component {
  state = {
    comment: {
      author: '',
      body: ''
    }
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

  handleSubmit = e => {
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
  };

  render() {
    const { comment } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} size="mini">
        <Divider />
        <Header>Add a Comment</Header>
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
      </Form>
    );
  }
}

export default connect()(CommentFormModal);
