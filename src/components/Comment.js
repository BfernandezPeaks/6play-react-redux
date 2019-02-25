import React from 'react';
import './Comment.css';

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.delete(this.props.index);
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

export default Comment;
