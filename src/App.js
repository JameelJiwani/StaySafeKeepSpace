import 'antd/dist/antd.css';
import NavBar from './components/NavBar'
import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const AppWrapper = styled(Layout)`
  background: #FFFFFF;
`;

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <Content>
        <p> This is my content ! </p>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Stay Safe, Keep Space ©2020 Created by WinHacks Team 4829843</Footer> */}
    </AppWrapper>
  );
}

export default App;
