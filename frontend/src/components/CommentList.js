import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions';
import { Header, Comment } from 'semantic-ui-react';
import CommentView from './CommentView';
import CommentFormModal from './CommentFormModal';

class CommentList extends Component {
  componentDidMount = () => {
    this.props.dispatch(getComments(this.props.post_id));
  };

  render() {
    const { comments, post_id } = this.props;

    return (
      <Comment.Group>
        <Header>Comments</Header>
        {comments &&
          comments.length > 0 &&
          comments.map(comment => (
            <CommentView comment={comment} key={comment.id} />
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
        <CommentFormModal post_id={post_id} />
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
