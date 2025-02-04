import './App.css';

function Phone(colors) {
  return <h2>my phone color is {colors.color}.</h2>
}

function App() {
  return (
    <div className="App-header">
      <h2>What your phone color?</h2>
      <Phone color="blue" />
    </div>
  );
}

export default App;