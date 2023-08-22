import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <div>
        <Greeting />
        <button>Get Greeting</button>
      </div>
    </div>
  );
}

export default App;
