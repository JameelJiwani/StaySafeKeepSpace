import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
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
=======
import styled from 'styled-components';
import { Layout } from 'antd';
import AppFooter from './AppFooter';

const { Footer } = Layout;

const AppWrapper = styled(Layout)`
  background: #FFFFFF;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <LandingContent />
      <AppFooter/>
    </AppWrapper>
>>>>>>> Stashed changes
  );
}

export default App;
