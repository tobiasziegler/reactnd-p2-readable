import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import PostList from './PostList';
import CategoryList from './CategoryList';

class DefaultView extends Component {
  render() {
    const { posts } = this.props;
    return (
      <Grid>
        <PostList posts={posts} />
        <CategoryList />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(DefaultView);
