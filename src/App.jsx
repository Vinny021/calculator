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
          <div className='ButtonsRow'>
            <div className='Button'>7</div>
            <div className='Button'>8</div>
            <div className='Button'>9</div>
            <div className='Button'>÷</div>
          </div>
          <div className='ButtonsRow'>
            <div className='Button'>4</div>
            <div className='Button'>5</div>
            <div className='Button'>6</div>
            <div className='Button'>x</div>
          </div>
          <div className='ButtonsRow'>
            <div className='Button'>1</div>
            <div className='Button'>2</div>
            <div className='Button'>3</div>
            <div className='Button'>-</div>
          </div>
          <div className='ButtonsRow'>
            <div className='Button'>0</div>
            <div className='Button'>.</div>
            <div className='Button'>=</div>
            <div className='Button'>+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
