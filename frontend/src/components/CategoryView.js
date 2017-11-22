import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts, getAllCategories } from '../actions';
import { Grid } from 'semantic-ui-react';
import PostList from './PostList';
import CategoryList from './CategoryList';

class CategoryView extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
    this.props.dispatch(getAllCategories());
  };

  render() {
    const { posts, categories } = this.props;

    return (
      <Grid>
        <PostList posts={posts} />
        <CategoryList categories={categories} />
      </Grid>
    );
  }
}

function mapStateToProps({ posts, categories }, { match }) {
  return {
    posts: posts.filter(post => post.category === match.params.category),
    categories
  };
}

export default connect(mapStateToProps)(CategoryView);
