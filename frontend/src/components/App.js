import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { withRouter, Route, Link } from 'react-router-dom';
import PostListView from './PostListView';
import PostDetailView from './PostDetailView';
import CategoryList from './CategoryList';
import { Container, Header, Grid } from 'semantic-ui-react';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
  };

  render() {
    return (
      <Container className="App">
        <Header as="h1" block>
          <Link to="/">Readable</Link>
        </Header>
        <Grid padded stackable>
          <Route exact path="/" component={PostListView} />
          <Route exact path="/:category" component={PostListView} />
          <Route exact path="/:category/:post_id" component={PostDetailView} />
          <Route path="/" component={CategoryList} />
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default withRouter(connect(mapStateToProps)(App));
