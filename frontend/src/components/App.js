import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DefaultView from './DefaultView';
import CategoryView from './CategoryView';
import PostDetailView from './PostDetailView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DefaultView} />
        <Route exact path="/:category" component={CategoryView} />
        <Route exact path="/:category/:post_id" component={PostDetailView} />
      </div>
    );
  }
}

export default App;
