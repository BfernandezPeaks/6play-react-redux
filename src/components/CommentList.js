import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

  constructor(props) {
    super(props);
    this.deleteHandle = this.deleteHandle.bind(this);
  }

  deleteHandle(index) {
    this.props.delete(index);
  }

  render() {
    const comments = this.props.comments.map(
      (comment, index) => <Comment value={comment} key={index} index={index} delete={this.deleteHandle}></Comment>
    );
    return (
      <div className="comments">
        <h3>Comments</h3>
        {comments}
      </div>
    );
  }
}

export default CommentList;
