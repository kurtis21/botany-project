import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log("this is where javascript code goes");

  return (
    <div className = "App">
      <header className = "App-header">
      This website enables easy entry and description of Pollen and Spores
      <img src="website logo 1.png" width="700" height="500"/>
      
      <form name="begin entry button">
        <button type="button" onClick="alert('hi')">
          Click here to begin
          </button>
          
      </form>

      </header>

      <body>
      
      </body>

      
    </div>
  );


  /* ORIGINAL
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kurtis makes an app
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
  );*/
}

export default App;
