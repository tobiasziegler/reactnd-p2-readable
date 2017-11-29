import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost } from '../actions';
import { Redirect } from 'react-router-dom';
import { Grid, Form, Button, Confirm } from 'semantic-ui-react';
import { v4 } from 'uuid';

class PostForm extends Component {
  state = {
    // Set state based on existing post, or set basic defaults for a new post
    post: {
      author: this.props.post ? this.props.post.author : '',
      body: this.props.post ? this.props.post.body : '',
      category: this.props.post ? this.props.post.category : 'react',
      title: this.props.post ? this.props.post.title : ''
    },
    discardModalOpen: false,
    redirect: false
  };

  handleChange = (e, v) => {
    // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        [v.name]: v.value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { post } = this.state;

    // Check whether editing a post or creating a new one, then create or update it
    if (this.props.post) {
      const updatedPost = {
        ...this.props.post,
        timestamp: Date.now(),
        title: post.title,
        author: post.author,
        body: post.body,
        category: post.category
      };

      this.props.dispatch(updatePost(updatedPost));
    } else {
      const newPost = {
        id: v4(),
        timestamp: Date.now(),
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category
      };

      this.props.dispatch(addPost(newPost));
    }

    this.setState({ redirect: true });
  };

  showDiscardModal = e => {
    e.preventDefault();

    this.setState({ discardModalOpen: true });
  };

  handleDiscardCancel = () => this.setState({ discardModalOpen: false });

  handleDiscardConfirm = e => {
    e.preventDefault();

    this.setState({ discardModalOpen: false, redirect: true });
  };

  render() {
    const { categories } = this.props;
    const { post, redirect, discardModalOpen } = this.state;

    return (
      <Grid.Column width={10}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            required
            name="author"
            label="Author"
            placeholder="Author"
            value={post.author}
            onChange={this.handleChange}
          />
          <Form.Select
            required
            name="category"
            label="Category"
            placeholder="Select a category"
            options={categories}
            value={post.category}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            name="title"
            label="Title"
            placeholder="Title"
            value={post.title}
            onChange={this.handleChange}
          />
          <Form.TextArea
            required
            name="body"
            label="Write your post"
            placeholder="Write your post"
            value={post.body}
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
          <Button onClick={this.showDiscardModal}>Discard</Button>
          <Confirm
            open={discardModalOpen}
            onCancel={this.handleDiscardCancel}
            onConfirm={this.handleDiscardConfirm}
            content={
              this.props.post
                ? 'Are you sure? All changes will be lost.'
                : 'Are you sure?'
            }
          />
        </Form>
        {redirect && (
          // Redirect to the home page for new posts or the edited post's page
          <Redirect
            to={
              this.props.post
                ? `/${this.props.post.category}/${this.props.post.id}`
                : '/'
            }
          />
        )}
      </Grid.Column>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.map(category => {
      return { text: category.name, value: category.path };
    }),
    // If editing an existing post, retrieve it based on the ID in the URL
    post: state.posts.filter(
      post => post.id === ownProps.match.params.post_id
    )[0]
  };
};

export default connect(mapStateToProps)(PostForm);
