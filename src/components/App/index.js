import Show from "../Show";
import Header from '../Header/index'
import Main from '../Main/index'


import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Show />
      </header>
    </div>
  );
}

export default App;
