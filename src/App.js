import './App.css';

function App() {
  const say = (a, b) => {
    alert(b.type)
  }

  return (
    <div className="App-header">
      <button onClick={(event) => say("happy birthday!", event)}>hit this to say happy birthday</button>
    </div>
  );
}

export default App;