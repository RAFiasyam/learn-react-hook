import './App.css';

function Mobil({ mobils }) {
  return (
    <div>
      {mobils.length > 0 && (
        <h2>
          I have {mobils.length} in my garage.
        </h2>
      )}
    </div>
  );
}

function App() {
  const mobils = ['BMW', 'Pagani', 'Nissan'];
  return (
    <div className="App-header">
      <Mobil mobils={mobils} />
    </div>
  );
}

export default App;