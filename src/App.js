import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';

function App() {
  return (
    <div className="App">
      <h1>React Project</h1>
      <ComponentA/> {/* render component A */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
