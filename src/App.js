import './App.css';

function App() {
  const say = () => {
    alert("happy birthday!")
  }

  return (
    <div className="App-header">
      <button onClick={say}>hit this to say happy birthday</button>
    </div>
  );
}

export default App;