import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button type="primary" className="Button" >Sign Up</Button>
        <h1 className="Title">Stay Safe Keep Space</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        

      </header>
      <header className="App-body">
       <h1>Listings</h1>
      </header>
    </div>
  );
}

export default App;
