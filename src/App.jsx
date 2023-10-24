import { useState } from 'react';
import './App.css';

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState(0);
  const [operation, setOperation] = useState('');
  const [expectNewValue, setExpectNewValue] = useState(false);


  const numberInput = (event) => {
    const currentNumberString = currentNumber.toString();
    const inputedNumber = event.target.innerText;

    if(currentNumberString.length < 8 && !expectNewValue){
      const newNumber = parseInt(currentNumberString + inputedNumber);
      setCurrentNumber(newNumber.toString());
    }else{
      setCurrentNumber(inputedNumber)
      setExpectNewValue(false)
    }
  }

  const operationInput = (event) => {
    
    const inputedOperation = event.target.innerText;
    var result = null;
    if(operation !== ''){
      switch (operation) {
        case '+':
            result = previousNumber + parseInt(currentNumber);
          break;
        case '-':
            result = previousNumber - parseInt(currentNumber);
          break;
        case 'X':
            result = previousNumber * parseInt(currentNumber);
          break;
        case '÷':
            result = previousNumber / parseInt(currentNumber);
          break;
        default:
          break;
      }
      setCurrentNumber(result.toString());
      setPreviousNumber(result);
    }

    setExpectNewValue(true);

    if(inputedOperation !== '='){
      if(result === null){
        setPreviousNumber(parseInt(currentNumber));
        setCurrentNumber(inputedOperation);
      }
      setOperation(inputedOperation);
    }else{
      setOperation('');
    }
  }

  const clearPrevious = () => {
    if(expectNewValue){
      setCurrentNumber(previousNumber.toString());
      setPreviousNumber(0);
      setOperation('');
    }else{
      setCurrentNumber('0');
    }
  }

  const clearAll = () => {
    setCurrentNumber('0');
    setPreviousNumber(0);
    setOperation('');
  }

  return (
    <div className="App">
      <div className='CalculatorBase'>
        <input id="display" className="Display" value={currentNumber}/>
        <div className='KeyboardSection'>
          <div className='ButtonsRow'>
            <div className='Button' style={{backgroundColor:'#454a5400'}}></div>
            <div className='Button' style={{backgroundColor:'#454a5400'}}></div>
            <button onClick={clearPrevious} className='Button'>C</button>
            <button onClick={clearAll} className='Button'>AC</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>7</button>
            <button onClick={numberInput} className='Button'>8</button>
            <button onClick={numberInput} className='Button'>9</button>
            <button onClick={operationInput} className='Button'>÷</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>4</button>
            <button onClick={numberInput} className='Button'>5</button>
            <button onClick={numberInput} className='Button'>6</button>
            <button onClick={operationInput} className='Button'>X</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>1</button>
            <button onClick={numberInput} className='Button'>2</button>
            <button onClick={numberInput} className='Button'>3</button>
            <button onClick={operationInput} className='Button'>-</button>
          </div>
          <div className='ButtonsRow'>
            <button onClick={numberInput} className='Button'>0</button>
            <button className='Button'>.</button>
            <button onClick={operationInput} className='Button'>=</button>
            <button onClick={operationInput} className='Button'>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
