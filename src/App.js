import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.addComment = this.addComment.bind(this);
  }

  addComment(newComment) {
    this.state.comments.push(newComment);
    this.setState({ comments: this.state.comments });
  }

  render() {
    return (
      <div className="App">
        <h1>6play</h1>
        <VideoPlayer></VideoPlayer>
        <CommentList comments={this.state.comments}></CommentList>
        <AddComment add={this.addComment}></AddComment>
      </div>
    );
  }
}

export default App;
