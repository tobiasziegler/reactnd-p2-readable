import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments, deleteComment } from '../actions';
import { Header, Comment, Menu, Modal, Button } from 'semantic-ui-react';
import moment from 'moment';
import CommentForm from './CommentForm';

class CommentList extends Component {
  state = { modalOpen: false, modalComment: null };

  componentDidMount = () => {
    this.props.dispatch(getComments(this.props.post_id));
  };

  handleModalOpen = comment => {
    // Set the modal open and store the comment the modal applies to in component state
    this.setState({ modalOpen: true, modalComment: comment });
  };

  handleModalDelete = () => {
    this.props.dispatch(deleteComment(this.state.modalComment));

    // Close the modal and reset the state
    this.setState({ modalOpen: false, modalComment: null });
  };

  // Close the modal and reset the state
  handleModalCancel = () =>
    this.setState({ modalOpen: false, modalComment: null });

  render() {
    const { comments, post_id } = this.props;

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
                <Menu size="mini" compact>
                  <Modal
                    trigger={
                      <Menu.Item onClick={() => this.handleModalOpen(comment)}>
                        Delete Comment
                      </Menu.Item>
                    }
                    open={this.state.modalOpen}
                    onClose={this.handleModalCancel}
                  >
                    <Modal.Header>Delete Comment</Modal.Header>
                    <Modal.Content>
                      Are you sure you want to delete this comment?
                    </Modal.Content>
                    <Modal.Actions>
                      <Button onClick={this.handleModalDelete}>Delete</Button>
                      <Button onClick={this.handleModalCancel}>Cancel</Button>
                    </Modal.Actions>
                  </Modal>
                </Menu>
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
        <CommentForm post_id={post_id} />
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
