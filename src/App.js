import { useState, createContext, useContext } from 'react';
import './App.css';

const UserContext = createContext();

function Component1({ name }) {
  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
      <Component2 name={name} />
    </div>
  );
}

function Component2({ name }) {
  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
      <Component3 name={name} />
    </div>
  );
}

function Component3({ name }) {
  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  const name = useContext(UserContext);

  return (
    <div>
      <h1>{`Hello ${name}!`}</h1>
    </div>
  );
}

function App() {
  const [name] = useState('Rafi asyam');

  return (
    <div>
      <UserContext.Provider value={name}>
        <h1>{`Hello ${name}!`}</h1>
        <Component1 name={name} />
      </UserContext.Provider>
    </div>
  );
}

export default App;