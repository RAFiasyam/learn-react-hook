import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`That your name right? ${name}!?`)
  }

  return (
    <div className="App-header">
      <form>
        <label>
          <input
            type='text'
            placeholder='type name here...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type='submit' onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;