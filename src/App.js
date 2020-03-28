import 'antd/dist/antd.css';
import NavBar from './components/NavBar'
import LandingContent from './components/LandingContent'
import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Layout } from 'antd';

const AppWrapper = styled(Layout)`
  background: #FFFFFF;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <LandingContent />
      {/* <Footer style={{ textAlign: 'center' }}>Stay Safe, Keep Space ©2020 Created by WinHacks Team 4829843</Footer> */}
    </AppWrapper>
  );
}

export default App;
