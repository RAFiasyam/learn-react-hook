import './App.css';

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
  )
}


function App() {
  return (
    <div className="App-header">
      <Goal isGoal={true} />
    </div>
  );
}

export default App;