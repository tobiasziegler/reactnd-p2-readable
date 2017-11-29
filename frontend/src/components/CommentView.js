import React, { Component } from 'react';
import { Comment, Button } from 'semantic-ui-react';
import moment from 'moment';
import CommentFormModal from './CommentFormModal';
import CommentDeleteModal from './CommentDeleteModal';
import Votes from './Votes';

class CommentView extends Component {
  render() {
    const { comment, handleVote } = this.props;

    return (
      <Comment>
        <Comment.Content>
          <Comment.Author>{comment.author}</Comment.Author>
          <Comment.Metadata>
            {moment(comment.timestamp).fromNow()}
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Votes item={comment} handleVote={handleVote} />
          <Button.Group size="mini" floated="right">
            <CommentFormModal comment={comment} />
            <CommentDeleteModal comment={comment} />
          </Button.Group>
        </Comment.Content>
      </Comment>
    );
  }
}

export default CommentView;
