import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts, getAllCategories } from '../actions';
import { Grid, Item } from 'semantic-ui-react';
import moment from 'moment';
import CategoryList from './CategoryList';

class PostDetailView extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
    this.props.dispatch(getAllCategories());
  };

  render() {
    const { post, categories } = this.props;

    return (
      <Grid>
        <Item.Group relaxed>
          {post && (
            <Item key={post.id}>
              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Description>{post.body}</Item.Description>
                <Item.Meta>
                  {moment(post.timestamp).fromNow()} by {post.author} in{' '}
                  {post.category}
                </Item.Meta>
                <Item.Extra>
                  Votes: {post.voteScore} | Comments: {post.commentCount}
                </Item.Extra>
              </Item.Content>
            </Item>
          )}
          {!post && (
            <Item>
              <Item.Content>
                <Item.Header>Post not found.</Item.Header>
              </Item.Content>
            </Item>
          )}
        </Item.Group>
        <CategoryList categories={categories} />
      </Grid>
    );
  }
}

function mapStateToProps({ posts, categories }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.post_id)[0],
    categories
  };
}

export default connect(mapStateToProps)(PostDetailView);
