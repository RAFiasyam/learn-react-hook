import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);


  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);


  return (
    <div>
      <h1>Time rendered: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)} >+</button>
      <p>Calculation : {calculation}</p>
    </div>
  );
}

export default App;