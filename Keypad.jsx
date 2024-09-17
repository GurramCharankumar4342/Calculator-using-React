import React from 'react'
const Keypad = ({handleClick,handleClear,calculate}) => {
  return (
    <div className='keypad'>
        <div className="row">
            <button className="digits" onClick={()=>{
                handleClick("7")
            }}>7</button>
            <button className="digits" onClick={()=>{
                handleClick("8")
            }}>8</button>
            <button className="digits" onClick={()=>{
                handleClick("9")
            }}>9</button>
            <button className="operators" onClick={()=>{
                handleClick('/')
            }}>/</button>
        </div>
        <div className="row">
            <button className="digits" onClick={()=>{
                handleClick('4')
            }}>4</button>
            <button className="digits" onClick={()=>{
                handleClick('5')
            }}>5</button>
            <button className="digits" onClick={()=>{
                handleClick('6')
            }}>6</button>
            <button className="operators" onClick={()=>{
               handleClick('*')
            }}>*</button>
        </div>
        <div className="row">
            <button className="digits"   onClick={()=>{
                handleClick('1')
            }}>1</button>
            <button className="digits"   onClick={()=>{
                handleClick('2')
            }}>2</button>
            <button className="digits"   onClick={()=>{
                handleClick('3')
            }}>3</button>
            <button className="operators"onClick={()=>{
                handleClick('-')
            }}>-</button>
        </div>
        <div className="row">
            <button className="digits"    onClick={()=>{
                handleClick('0')
            }}>0</button>
            <button className="equals"    onClick={()=>{
                calculate()
            }}>=</button>
            <button className="clear"     onClick={()=>{
                handleClear()
            }}>C</button>
            <button className="operators" onClick={()=>{
                handleClick('+')
            }}>+</button>
        </div>
    </div>
  )
}

export default Keypad