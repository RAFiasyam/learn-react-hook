import './App.css';

function App() {
  const numberRafi = 85;

  const filter = () => {
    if (numberRafi > 90) {
      return "Selamat! Rafi lulus";
    } else {
      return "Selamat! Rafi tidak lulus";
    }
  }

  return (
    <div className="App-header">
      <p>{filter()}</p>
    </div>
  );
}

export default App;