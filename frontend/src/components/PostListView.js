import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

class PostListView extends Component {
  render() {
    const { posts } = this.props;

    return <PostList posts={posts} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps.match.params;

  return {
    posts: !category
      ? state.posts
      : state.posts.filter(post => post.category === category)
  };
};

export default connect(mapStateToProps)(PostListView);
