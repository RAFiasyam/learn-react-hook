import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('')

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
      </form>
    </div>
  );
}

export default App;