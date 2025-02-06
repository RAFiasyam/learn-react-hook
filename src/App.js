import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={((e) => setInputValue(e.target.value))}
      />
      <h3>Render Count : {count.current}</h3>
    </div>
  );
}

export default App;