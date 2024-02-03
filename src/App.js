import logo from './logo.svg';
import './App.css';
// import { Greet } from './Components/Greet'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Pritam">
        <p>This is a children</p>
      </Greet>
      <Greet name="Nityam">
        <button>button</button>
      </Greet>
      <Greet name="Jay"/> */}
      <Welcome name="Pritam"/>
      <Welcome name="Nityam"/>
      <Welcome name="Jay"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
