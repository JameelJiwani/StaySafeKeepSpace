import 'antd/dist/antd.css';
import NavBar from './components/NavBar'
import LandingContent from './components/LandingContent'
import CollectionInfoContent from './components/CollectionInfoContent'
import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import { Layout } from 'antd';

const AppWrapper = styled(Layout)`
  background: white;
  height: 100%;
`;

function App() {
    const [currentStep, setCurrentStep] = useState('home');
  return (
    <AppWrapper>
      <NavBar />
        {currentStep === 'home' && <LandingContent setCurrentStep={setCurrentStep} />}
        {currentStep === 'collectInfo' && <CollectionInfoContent />}
      {/* <Footer style={{ textAlign: 'center' }}>Stay Safe, Keep Space ©2020 Created by WinHacks Team 4829843</Footer> */}
    </AppWrapper>
  );
}

export default App;
