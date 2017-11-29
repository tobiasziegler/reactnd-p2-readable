import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Votes extends Component {
  render() {
    const { item, handleVote } = this.props;

    return (
      <Button.Group size="tiny">
        <Button
          icon="thumbs up icon"
          onClick={() => handleVote(item, 'upVote')}
        />
        <Button>{item.voteScore}</Button>
        <Button
          icon="thumbs down icon"
          onClick={() => handleVote(item, 'downVote')}
        />
      </Button.Group>
    );
  }
}

export default Votes;
