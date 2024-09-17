
import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';


function App() {
  const[input,setInput]=useState('');

  function handleClick(value){
   setInput(input+value)
    }

    function calculate(value){
      let output=eval(input)
      setInput(output)
      }

    function handleClear(){
      setInput('')
       }

  return (
    <div className='calculater'>
    <h1>Calculater App Using React</h1>
    <div className="header-input">
      <input type='text' value={input} className='output'></input>
    </div>
     <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
    </div>
  );
}

export default App;
