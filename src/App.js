import { useState } from 'react';
import './App.css';


function App() {
  const [color, setColor] = useState('blue')

  return (
    <div>
      <h1>my fav color is {color}</h1>
      <div>
        <button
          style={{ background: 'red', color: 'white' }}
          type='button'
          onClick={() => setColor("red")}
        >Red
        </button>
      </div>
      <div>
        <button
          style={{ background: 'pink', color: 'black' }}
          type='button'
          onClick={() => setColor("pink")}
        >Pink
        </button>
      </div>
      <div>
        <button
          style={{ background: 'yellow', color: 'black' }}
          type='button'
          onClick={() => setColor("yellow")}
        >Yellow
        </button>
      </div>
      <div>
        <button
          style={{ background: 'blue', color: 'white' }}
          type='button'
          onClick={() => setColor("blue")}
        >Blue
        </button>
      </div>
      <div>
        <button
          style={{ background: 'green', color: 'white' }}
          type='button'
          onClick={() => setColor("green")}
        >Green
        </button>
      </div>
    </div>
  );
}

export default App;