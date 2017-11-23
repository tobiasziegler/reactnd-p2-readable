import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

class CategoryView extends Component {
  render() {
    const { posts } = this.props;

    return <PostList posts={posts} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.filter(
      post => post.category === ownProps.match.params.category
    )
  };
};

export default connect(mapStateToProps)(CategoryView);
