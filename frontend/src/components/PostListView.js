import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { Grid } from 'semantic-ui-react';

class PostListView extends Component {
  render() {
    const { posts } = this.props;

    return (
      <Grid.Column width={10}>
        <PostList posts={posts} />
      </Grid.Column>
    );
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
