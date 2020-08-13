import React, {useState} from 'react';
import './App.css';
import ClassSelect from './ClassSelect';
import SelectShape from './Shape.js';


function App() {
  
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step+1);
  
    //step === 0 ? <div>first step</div> : <SelectShape/>
  switch (step) {
     case 0:
      return( 
        <div className = "App">
        <header className = "App-header">
        This website enables easy entry and description of Pollen and Spores into an SQL database
    
        <img src="website logo 1.png" width="700" height="500" alt="website logo load failed"/>
  
        <form name="begin entry button">
          <button type="button" onClick={nextStep}>
            Click here to begin
            </button>
        </form>
        </header>
      </div> );

    case 1:
      return(
        <ClassSelect onSubmit={nextStep}/>
      
      );

    case 2:
      return(
        <SelectShape onSubmit={nextStep}/>
        
      );

    case 3:
    default:
      return(
      <h1>there is no step here</h1>
      );


      
  }
}

export default App;


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
