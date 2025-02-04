import './App.css';

function App() {

  const x = 5;
  let text = 'goodbye';
  if (x < 10) {
    text = 'hello';
  }

  const myText = text;

  return (
    <div className="App-header">
      <p>{myText}</p>
    </div>
  );
}

export default App;