import { useState } from 'react';
import './App.css';


function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs)
  }

  return (
    <div className="App-header">
      <form>
        <label>Enter your name :
          <input
            type='text'
            name='username'
            placeholder='type name here...'
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>Enter your age :
          <input
            type='number'
            name='age'
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type='submit' onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;