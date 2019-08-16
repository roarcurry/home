import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	        Just An Aimless Deployment For My VPS.
        </p>
        <a
          className="App-link"
          href="https://roarcurry.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Blog
        </a>
      </header>
    </div>
  );
}

export default App;
