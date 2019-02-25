import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <pre>{this.props.value}</pre>
    );
  }
}

export default Comment;
