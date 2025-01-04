import logo from './logo.svg';
import './App.css';
import Show from "./components/Show";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Show heading= "To do list" placeholder="Enter the task to do "/>
      </header>
    </div>
  );
}

export default App;
