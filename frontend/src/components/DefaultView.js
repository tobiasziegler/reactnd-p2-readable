import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts, getAllCategories } from '../actions';
import PostList from './PostList';

class DefaultView extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
    this.props.dispatch(getAllCategories());
  };

  render() {
    const { posts } = this.props;
    return <PostList posts={posts} />;
  }
}

function mapStateToProps({ posts, categories }) {
  return { posts, categories };
}

export default connect(mapStateToProps)(DefaultView);
