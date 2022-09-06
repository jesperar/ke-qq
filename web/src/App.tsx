import React from 'react';
import axios from 'axios'
import './App.css';

function App() {
  axios('/api/user').then(res => {
    console.log(res);
  })
  return (
    <div className="App">
      <h1>aaaaaaa</h1>
    </div>
  );
}

export default App;
