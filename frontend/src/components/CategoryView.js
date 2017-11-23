import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { Grid } from 'semantic-ui-react';
import PostList from './PostList';
import CategoryList from './CategoryList';

class CategoryView extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
  };

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

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.filter(
      post => post.category === ownProps.match.params.category
    )
  };
};

export default connect(mapStateToProps)(CategoryView);
