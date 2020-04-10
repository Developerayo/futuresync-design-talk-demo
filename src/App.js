import React from 'react';
import futuresync from './futuresync.png';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={futuresync} className="App-logo" alt="futuresync" />
      </header>
      <div className="body">
      <h3>Hello!</h3>
      </div>
      <form>
      <span className="formtext">Name of Company</span>
    	  <input 
          type="text" 
          placeholder="Enter Company Name" 
          required 
        />
        <button>Click!</button>
    	</form>
    </div>
  );
}

export default App;
