import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';

class Votes extends Component {
  render() {
    const { item, handleVote } = this.props;

    return (
      <div>
        <Button attached="top" onClick={() => handleVote(item, 'upVote')}>
          UpVote
        </Button>
        <Segment attached>{item.voteScore}</Segment>
        <Button attached="bottom" onClick={() => handleVote(item, 'downVote')}>
          DownVote
        </Button>
      </div>
    );
  }
}

export default Votes;
