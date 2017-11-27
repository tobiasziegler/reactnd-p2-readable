import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Button } from 'semantic-ui-react';
import { v4 } from 'uuid';

class PostForm extends Component {
  state = {
    post: {
      author: '',
      body: '',
      category: 'react',
      title: ''
    }
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

    const newPost = {
      author: post.author,
      body: post.body,
      category: post.category,
      commentCount: 0,
      deleted: false,
      id: v4(),
      timestamp: Date.now(),
      title: post.title,
      voteScore: 0
    };

    // TODO: Save the new post and update the Redux store
  };

  render() {
    const { categories } = this.props;
    const { post } = this.state;

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
        </Form>
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.map(category => {
      return { text: category.name, value: category.path };
    })
  };
};

export default connect(mapStateToProps)(PostForm);
