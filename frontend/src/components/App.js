import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { withRouter, Route, Link } from 'react-router-dom';
import PostListView from './PostListView';
import PostDetailView from './PostDetailView';
import CategoryList from './CategoryList';
import { Header, Grid } from 'semantic-ui-react';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
  };

  render() {
    return (
      <div className="App">
        <Header as="h1" block>
          <Link to="/">Readable</Link>
        </Header>
        <Grid>
          <Route exact path="/" component={PostListView} />
          <Route exact path="/:category" component={PostListView} />
          <Route exact path="/:category/:post_id" component={PostDetailView} />
          <CategoryList />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default withRouter(connect(mapStateToProps)(App));
