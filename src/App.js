import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  


  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, []);


  return (
    <div>
      <h1>Time rendered: {count}</h1>
    </div>
  );
}

export default App;