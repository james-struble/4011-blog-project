import React from 'react';
import './App.css';
import { BlogPostController } from './components/BlogPostController';

function App() {
  return (
    <div className="App-header">
      <div style={{fontSize: '50px', fontWeight: 'bold', marginTop: '10px'}}>My Blog!</div>
      <BlogPostController/>
    </div>
  );
}

export default App;
