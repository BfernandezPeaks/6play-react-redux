import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>6play</h1>
        <VideoPlayer></VideoPlayer>
        <CommentList></CommentList>
        <AddComment></AddComment>
      </div>
    );
  }
}

export default App;
