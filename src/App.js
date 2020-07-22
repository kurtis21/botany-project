import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SelectShape from './Shape.js';

function App() {
  //this is where javascript code goes;

  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step+1);
  
    //step === 0 ? <div>first step</div> : <SelectShape/>
  switch (step) {
     case 0:
      return( 
        <div className = "App">
        <header className = "App-header">
        This website enables easy entry and description of Pollen and Spores
        
        <img src="website logo 1.png" width="700" height="500"/>
  
        <form name="begin entry button">
          <button type="button" onClick={nextStep}>
            Click here to begin
            </button>
        </form>
        </header>
      </div> );

    case 1:
      return(
        <SelectShape onSubmit={nextStep}/>
      );

    case 2:
    default:
      return(
      <h1>there is no step here</h1>
      );


      
  }
  




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
