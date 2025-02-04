import { useState } from 'react';
import './App.css';


function App() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <div className="App-header">
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;