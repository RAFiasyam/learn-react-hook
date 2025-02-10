import './App.css';
import useFecth from './useFetch';

function App() {
  const [data] = useFecth('https://jsonplaceholder.typicode.com/todos');

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>
        })}
    </>
  );
}

export default App;