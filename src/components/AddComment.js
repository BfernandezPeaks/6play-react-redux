import React from 'react';
import { addComment } from '../redux/actions';
import { connect } from "react-redux";


function mapDispatchToProps(dispatch) {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
}

class AddCommentComponent extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value) {
      this.props.addComment(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea rows="6" cols="60" placeholder="My comment." onChange={this.handleChange} value={this.state.value}></textarea>
        <br />
        <input type="submit" value="Send comment" />
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddCommentComponent);
