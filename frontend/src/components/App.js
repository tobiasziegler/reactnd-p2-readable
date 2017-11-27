import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import PostListView from './PostListView';
import PostDetailView from './PostDetailView';
import PostForm from './PostForm';
import CategoryList from './CategoryList';
import { Container, Header, Grid, Button } from 'semantic-ui-react';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
  };

  render() {
    return (
      <Container className="App">
        <Header as="h1" block>
          <Header.Content>
            <Link to="/">Readable</Link>
          </Header.Content>
          <Button floated="right">
            <Link to="/new">Add a Post</Link>
          </Button>
        </Header>
        <Grid padded stackable>
          <Switch>
            <Route exact path="/" component={PostListView} />
            <Route exact path="/new" component={PostForm} />
            <Route exact path="/:category" component={PostListView} />
            <Route
              exact
              path="/:category/:post_id"
              component={PostDetailView}
            />
          </Switch>
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
