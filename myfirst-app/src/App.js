import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'You clicked ${count}'

  });
  return (
    <div className="App">
      <h1> Hello class Advance js Progrmming</h1>

      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Button
     </button>
    </div>
  );
}

export default App;
