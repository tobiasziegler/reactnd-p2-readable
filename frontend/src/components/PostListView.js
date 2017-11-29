import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSortOrder, votePost } from '../actions';
import PostList from './PostList';
import { Grid, Menu } from 'semantic-ui-react';
import { sortByOrder } from '../utils/sort';

class PostListView extends Component {
  handleSortClick = (e, { name }) => this.props.dispatch(setSortOrder(name));
  handleVote = (post, vote) => this.props.dispatch(votePost(post, vote));

  render() {
    const { posts, sortOrder } = this.props;

    return (
      <Grid.Column width={10}>
        <Menu secondary>
          <Menu.Item header>Sort by:</Menu.Item>
          <Menu.Item
            name="latest"
            active={sortOrder === 'latest'}
            onClick={this.handleSortClick}
          >
            Latest
          </Menu.Item>
          <Menu.Item
            name="popular"
            active={sortOrder === 'popular'}
            onClick={this.handleSortClick}
          >
            Most Popular
          </Menu.Item>
        </Menu>
        <PostList posts={posts} handleVote={this.handleVote} />
      </Grid.Column>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps.match.params;

  return {
    posts: !category
      ? sortByOrder(state.posts, state.sortOrder)
      : sortByOrder(
          state.posts.filter(post => post.category === category),
          state.sortOrder
        ),
    sortOrder: state.sortOrder
  };
};

export default connect(mapStateToProps)(PostListView);
