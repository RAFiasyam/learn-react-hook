import './App.css';

function Phone(colors) {
  return <h2>my phone color is {colors.color.color} {colors.color.model}.</h2>
}

function App() {
  const colorInfo = { color: "blue", model: "Poco" };
  return (
    <div className="App-header">
      <h2>What your phone color?</h2>
      <Phone color={colorInfo} />
    </div>
  );
}

export default App;