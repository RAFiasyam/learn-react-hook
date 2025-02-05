import { useState } from 'react';
import './App.css';
import Todos from './Todos';


function App() {
  const [count, setCount] = useState(0);
  const [todos] = useState(["todo 1", "todo 2"]);

  const incremnt = () => {
    setCount((c) => c + 1);
  }

  return (
    <div className="App-header">
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={incremnt}>+</button>
      </div>
    </div>
  );
}

export default App;