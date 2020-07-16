import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log("this is where javascript code goes");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kurtis makes the best app
        </p>
        <a
          className="App-link"
          href="https://wisconsin.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
         Go to an external link
        </a>
      </header>
    </div>
  );
}

export default App;
