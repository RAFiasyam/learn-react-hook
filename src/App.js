import './App.css';

function App() {
  const say = (a) => {
    alert(a)
  }

  return (
    <div className="App-header">
      <button onClick={() => say("happy birthday!")}>hit this to say happy birthday</button>
    </div>
  );
}

export default App;