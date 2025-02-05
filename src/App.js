import { useState } from 'react';
import './App.css';


function App() {
  const [car] = useState({
    brand: 'Nissan',
    model: 'nissan 180sx',
    year: '1989 ',
    color: 'marron',
    image: 'https://i.pinimg.com/736x/a5/91/dd/a591dde1f48d9a6369310fcf0ee91119.jpg'
  })

  return (
    <div>
      <img src={car.image} width='550px' style={{borderRadius: 30 }} alt='car' />
      <h1>My {car.brand} </h1>
      <p>its a {car.year} {car.model} n have {car.color} color🤤.</p>
    </div>
  );
}

export default App;