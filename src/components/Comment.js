import React from 'react';
import './Comment.css';
import { deleteComment } from '../redux/actions';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: index => dispatch(deleteComment(index))
  };
}

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.deleteComment(this.props.index);
  }

  render() {
    return (
      <div className="comment">
        <pre>{this.props.value.text}</pre>
        <div className="delete" onClick={this.handleClick}>x</div>
        <div className="date">{this.props.value.date}</div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Comment);
