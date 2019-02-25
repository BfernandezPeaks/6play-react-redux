import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    return (
      <div className="comments">
        <p>CommentList works</p>
        <Comment></Comment>
      </div>
    );
  }
}

export default CommentList;
