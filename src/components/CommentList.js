import React from 'react';
import Comment from './Comment';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { comments: state.comments };
};

const CommentList = ({ comments }) => (
  <div className="comments">
    <h2>Comments</h2>
    {comments.map((comment, index) => <Comment value={comment} key={index} index={index}></Comment>)}
  </div>
);

export default connect(mapStateToProps)(CommentList);
