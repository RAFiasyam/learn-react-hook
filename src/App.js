import './App.css';

function Mobil(props) {
  return <li>I have 1 brand car {props.brand}</li>
}

function App() {
  const mobils = [
    { id: 1, brand: 'Honda' },
    { id: 2, brand: 'Toyota' },
    { id: 3, brand: 'Nissan' }
  ];
  return (
    <div className="App-header">
      <ul>
        {mobils.map((mobil) => <Mobil key={mobil.id} brand={mobil.brand} />)}
      </ul>
    </div>
  );
}

export default App;