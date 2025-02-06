import { useState } from 'react';
import './App.css';


function Component1({ name }) {

  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
      <Component2 name={name} />
    </div>
  )
}

function Component2({ name }) {
  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
      <Component3 name={name} />
    </div>
  )
}

function Component3({ name }) {
  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
      <Component4 name={name} />
    </div>
  )
}

function Component4({ name }) {
  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
    </div>
  )
}


function App() {
  const [name] = useState('Rafi asyam');

  return (
    <div>
      <h1>App</h1>
      <Component1 name={name} />
    </div>
  );
}

export default App;