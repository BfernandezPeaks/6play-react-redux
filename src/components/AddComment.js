import React from 'react';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.add(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea rows="10" cols="80" placeholder="My comment." onChange={this.handleChange} value={this.state.value}></textarea>
        <br />
        <input type="submit" value="Send comment" />
      </form>
    );
  }
}

export default AddComment;
