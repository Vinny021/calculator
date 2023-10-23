import { useState } from 'react';
import './App.css';

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);


  const updateCurrentNumber = (event) => {
    const newNumber = event.target.value.length === 0 ? 0 : event.target.value;
    setCurrentNumber(parseInt(newNumber));
  }

  const numberInput = (event) => {
    const currentNumberString = currentNumber.toString();
    if(currentNumberString.length < 8){
      const inputedNumber = event.target.innerText;
      const newNumber = parseInt(currentNumberString + inputedNumber);
      setCurrentNumber(newNumber);
    }
  }

  return (
    <div className="App">
      <div className='CalculatorBase'>
        <input id="display" className="Display" type="number" onChange={updateCurrentNumber} value={currentNumber}/>
        <div className='KeyboardSection'>
          <div className='ButtonsRow'>
            <div className='Button' style={{backgroundColor:'#454a5400'}}></div>
            <div className='Button' style={{backgroundColor:'#454a5400'}}></div>
            <div className='Button' style={{backgroundColor:'#454a5400'}}></div>
            <button className='Button'>AC</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>7</button>
            <button onClick={numberInput} className='Button'>8</button>
            <button onClick={numberInput} className='Button'>9</button>
            <button className='Button'>÷</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>4</button>
            <button onClick={numberInput} className='Button'>5</button>
            <button onClick={numberInput} className='Button'>6</button>
            <button className='Button'>X</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>1</button>
            <button onClick={numberInput} className='Button'>2</button>
            <button onClick={numberInput} className='Button'>3</button>
            <button className='Button'>-</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>0</button>
            <button className='Button'>.</button>
            <button className='Button'>=</button>
            <button className='Button'>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
