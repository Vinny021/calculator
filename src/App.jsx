import { useState } from 'react';
import './App.css';

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);


  const updateCurrentNumber = (event) => {
    const newNumber = event.target.value.length === 0 ? 0 : event.target.value;
    setCurrentNumber(parseInt(newNumber));
  }

  return (
    <div className="App">
      <div className='CalculatorBase'>
        <input id="display" className="Display" type="number" onChange={updateCurrentNumber} value={currentNumber}/>
        <div className='KeyboardSection'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
