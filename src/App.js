import { useState } from 'react';
import './App.css';
import Todos from './Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((t) => [...t, "new todo"]);
  }

  return (
    <>
      <Todos todos={todos} addTodo={addTodo}>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </Todos>
    </>
  );
}

export default App;