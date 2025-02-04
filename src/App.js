import './App.css';

function Mobil(props) {
  return <li>Im a {props.brand}</li>
}

function App() {
  const mobils = ['Honda', 'Toyota', 'Nissan']
  return (
    <div className="App-header">
      {mobils.map((mobil) => <Mobil brand={mobil} />)}
    </div>
  );
}

export default App;