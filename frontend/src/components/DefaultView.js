import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';

class DefaultView extends Component {
  render() {
    const { posts } = this.props;

    return <PostList posts={posts} />;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(DefaultView);
