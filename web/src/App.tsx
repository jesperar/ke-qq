import React, {useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  useEffect(() => {
    axios('/api/user').then(res => {
      console.log(res);
    })
  }, [])
  return (
    <div className="App">
      <h1>aaaaaaa</h1>
    </div>
  );
}

export default App;
