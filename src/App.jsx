import { useState } from 'react';
import './App.css';
import AlertComponent from './components/AlertComponent';
import countDecimalPlaces  from './utils/mathFunction';

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState(0);
  const [operation, setOperation] = useState('');
  const [expectNewValue, setExpectNewValue] = useState(false);
  const [showAlert, setShowAlert] = useState([false, 'Error']);


  const numberInput = (event) => {
    const currentNumberString = currentNumber.toString();
    const inputedNumber = event.target.innerText;

    if(currentNumberString.length < 8 && !expectNewValue){
      const newNumber = parseFloat(currentNumberString + inputedNumber);
      setCurrentNumber(newNumber.toString());
    }else if(expectNewValue){
      setCurrentNumber(inputedNumber)
      setExpectNewValue(false)
    }else{
      setShowAlert([true, 'Limite de 8 digitos']);
      setTimeout(() => setShowAlert(false), 1500);
    }
  }

  const operationInput = (event) => {
    
    const inputedOperation = event.target.innerText;
    var result = null;
    if(operation !== ''){
      switch (operation) {
        case '+':
            result = previousNumber + parseFloat(currentNumber);
          break;
        case '-':
            result = previousNumber - parseFloat(currentNumber);
          break;
        case 'X':
            result = previousNumber * parseFloat(currentNumber);
          break;
        case '÷':
            result = previousNumber / parseFloat(currentNumber);
          break;
        default:
          break;
      }

      if(countDecimalPlaces(result) > 3){
        result = result.toFixed(3);
      }

      const resultString = result.toString();
      if(resultString.length > 8){
        setShowAlert([true, 'Limite de 8 digitos']);
        setTimeout(() => setShowAlert(false), 1500);
        return;
      }else{
        setCurrentNumber(resultString);
        setPreviousNumber(result);
      }
    }

    setExpectNewValue(true);

    if(inputedOperation !== '='){
      if(result === null){
        setPreviousNumber(parseFloat(currentNumber));
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

  const invertSignal = () => {
    if(!expectNewValue || operation === ''){
      var invertedCurrentNumber = parseFloat(currentNumber) * -1;
      setCurrentNumber(invertedCurrentNumber);
    }
  }

  const addFloatPoint = () => {
    if(!expectNewValue){
      const newCurrentNumberString = currentNumber.toString() + '.';
      setCurrentNumber(newCurrentNumberString);
    }
  }

  var alertDiv = showAlert[0] ? <AlertComponent errorMessage={showAlert[1]}/> : null

  return (
    <div className="App">
      {alertDiv}
      <div className='CalculatorBase'>
        <input id="display" className="Display" value={currentNumber}/>
        <div className='KeyboardSection'>
          <div className='ButtonsRow'>
            <div className='Button' style={{backgroundColor:'#454a5400'}}></div>
            <button onClick={invertSignal} className='Button'>+/-</button>
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
            <button onClick={addFloatPoint} className='Button'>.</button>
            <button onClick={operationInput} className='Button'>=</button>
            <button onClick={operationInput} className='Button'>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
