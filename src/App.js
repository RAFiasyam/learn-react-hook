import { useState } from 'react';
import './App.css';


function App() {
  const [car, setCar] = useState('Toyota');

  const handleChange = (event) => {
    setCar(event.target.value)
  }

  return (
    <div className="App-header">
      <form>
        <select value={car} onChange={handleChange}>
          <option value="Honda">Honda</option>
          <option value="Toyota">Toyota</option>
          <option value="Nissan">Nissan</option>
        </select>
      </form>
    </div>
  );
}

export default App;