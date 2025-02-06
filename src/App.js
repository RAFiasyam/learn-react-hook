import { useReducer } from 'react';
import './App.css';

const initialTodos = [
  {
    id: 1,
    title: 'keren',
    complate: false,
  },
  {
    id: 2,
    title: 'baik',
    complate: true,
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case "Complate":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complate: !todo.complate }
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplate = (todo) => {
    dispatch({ type: "COMPLATE", id: todo.id })
  }


  return (
    <>
      {todos.map((todo) => (
        <div key={todo}>
          <label>
            <input
              type='checkbox'
              checked={todo.complate}
              onChange={() => handleComplate(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default App;