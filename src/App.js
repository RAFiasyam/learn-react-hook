import { useState } from 'react';
import './App.css';


function App() {
  const [car, setCar] = useState({
    brand: 'Nissan',
    model: 'nissan 180sx',
    year: '1989 ',
    color: 'maroon',
    image: 'https://i.pinimg.com/736x/a5/91/dd/a591dde1f48d9a6369310fcf0ee91119.jpg'
  });

  const updateInfo = () => {
    setCar(previousState => {
      return { ...previousState, color: 'purple', image: 'https://i.pinimg.com/474x/76/0d/b2/760db222759734acef1f53ae01e771c8.jpg' }
    })
  }

  return (
    <div>
      <img src={car.image} width='550px' style={{ borderRadius: 30, objectFit: true }} alt='car' />
      <h1>My {car.brand} </h1>
      <p>its a {car.year} {car.model} n have {car.color} color🤤.</p>
      <button
        type='text'
        onClick={updateInfo}
      >
        changes to purple one?
      </button>
    </div>
  );
}

export default App;