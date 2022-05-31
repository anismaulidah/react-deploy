import React from 'react';
import  {useState} from 'react';

function CounterPage() {
  let [countNum, setCount] = useState(0);
  let increaseValue = () => {
    setCount((countNum += 1));
  };

  let decreaseValue = () => {
  if (countNum === 0) {
    alert("Let's stay positive, shall we?");
  } else {
   setCount((countNum -= 1)); 
  }
  };
  
  let resetValue = () => {
    setCount(0); 
  };

  return (
  <div>
    <h1> {countNum} </h1>
    <button onClick={increaseValue}>+</button> 
    <button onClick={decreaseValue}>-</button>
    <button onClick={resetValue}>Reset</button>
  </div>
  )
}
export default CounterPage;