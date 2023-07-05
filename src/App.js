import './App.css';

import Main from './components/Main';

// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <h2>Marvel Project</h2>
          <nav className="navbar">
            <ul>
              <li><a>About</a></li>
              <li><a>Services</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <h1>Personagens</h1>
      <Main />
    </div>
  );
}

export default App;
