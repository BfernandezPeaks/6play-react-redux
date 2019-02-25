import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    const comments = this.props.comments.map((com, i) => <Comment value={com} key={i}></Comment>);
    return (
      <div className="comments">
        <h3>Comments</h3>
        {comments}
      </div>
    );
  }
}

export default CommentList;
