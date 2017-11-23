import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions';
import { Header, Comment } from 'semantic-ui-react';
import moment from 'moment';

class CommentList extends Component {
  componentDidMount = () => {
    this.props.dispatch(getComments(this.props.post_id));
  };

  render() {
    const { comments } = this.props;

    return (
      <Comment.Group>
        <Header>Comments</Header>
        {comments &&
          comments.length > 0 &&
          comments.map(comment => (
            <Comment key={comment.id}>
              <Comment.Content>
                <Comment.Author>{comment.author}</Comment.Author>
                <Comment.Metadata>
                  {moment(comment.timestamp).fromNow()}
                </Comment.Metadata>
                <Comment.Text>{comment.body}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
        {(!comments || comments.length === 0) && (
          <Comment>
            <Comment.Content>
              <Comment.Text>
                There are no comments on this post. Be the first to leave one!
              </Comment.Text>
            </Comment.Content>
          </Comment>
        )}
      </Comment.Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
