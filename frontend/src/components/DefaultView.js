import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';

class DefaultView extends Component {
  componentDidMount = () => {
    this.props.dispatch(getAllPosts());
  };

  render() {
    return <p>This component will display the default (root) view</p>;
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(DefaultView);
