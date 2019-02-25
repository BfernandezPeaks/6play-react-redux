import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(newComment) {
    this.state.comments.push(newComment);
    this.setState({ comments: this.state.comments });
  }

  handleDelete(index) {
    this.state.comments.splice(index, 1);
    this.setState({ comments: this.state.comments });
  }

  render() {
    return (
      <div className="App">
        <h1>6PLAY</h1>
        <VideoPlayer></VideoPlayer>
        <CommentList comments={this.state.comments} delete={this.handleDelete}></CommentList>
        <AddComment add={this.handleAdd}></AddComment>
      </div>
    );
  }
}

export default App;
