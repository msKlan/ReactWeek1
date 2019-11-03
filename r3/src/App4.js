import React, {useState, useEffect} from 'react';
import './App.css';

function App4() {
  const init = parseInt(localStorage.getItem("count")); //Returns value as a string
  const [count, setCount] = useState(init);
  const [countValue, setCountValue] = useState(1);
  const [timer, setTimer ] = useState(0);
  let now = new Date();

  function increase() {
    setCount(count + countValue);
  }

  function decrease() {
    setCount(count - countValue);
  }

  useEffect(() => {
    localStorage.setItem("count", count);
  },[count]);

  useEffect(() => {
    setTimeout(() => setTimer(timer+1), 1000);
  },[timer]);
  
  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => increase()}>Add Count</button>
      <button onClick={() => decrease()}>Substract Count</button>
      <p>Count Value {countValue}</p>
      <input
        id="count"
        value={countValue}
        onChange={e => setCountValue(Number(e.target.value))}
      />
      <p>Time is { now.toJSON() }</p>
    </div>
  );
}

export default App4;
