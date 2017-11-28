import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment, Menu } from 'semantic-ui-react';
import moment from 'moment';
import CommentFormModal from './CommentFormModal';
import CommentDeleteModal from './CommentDeleteModal';

class CommentView extends Component {
  render() {
    const { comment } = this.props;

    return (
      <Comment>
        <Comment.Content>
          <Comment.Author>{comment.author}</Comment.Author>
          <Comment.Metadata>
            {moment(comment.timestamp).fromNow()}
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Menu size="mini" compact>
            <CommentFormModal comment={comment} />
            <CommentDeleteModal comment={comment} />
          </Menu>
        </Comment.Content>
      </Comment>
    );
  }
}

export default connect()(CommentView);
