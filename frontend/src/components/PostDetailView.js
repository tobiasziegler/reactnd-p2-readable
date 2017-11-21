import React, { Component } from 'react';

class PostDetailView extends Component {
  render() {
    return (
      <p>
        This component will display the post detail view for post_id
        {' ' + this.props.match.params.post_id}
      </p>
    );
  }
}

export default PostDetailView;
