import React from 'react';
import futuresync from './futuresync.png';
import './App.css';
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={futuresync} className="App-logo" alt="futuresync" />
      </header>
      <div className="body">
      <h3>Register</h3><br /><br />
      </div>
      <form>
      <span className="formtext">Name of Company</span>
    	  <input 
          type="text" 
          className="input"
          placeholder="Enter Company Name" 
          required 
        />
        <button className="button">Click!</button>
    	</form><br /><br /><br /><br /><br /><br />
      <h3>Companies Details here!</h3>
    </div>
  );
}

export default App;
