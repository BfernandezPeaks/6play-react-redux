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
    if (this.state.value) {
      const date = new Date();
      this.props.add({ text: this.state.value, date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` });
      this.setState({ value: '' });
    }
    event.preventDefault();
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

export default AddComment;
