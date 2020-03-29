import 'antd/dist/antd.css';
import './App.css';
import React, {useState} from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppFooter from "./AppFooter";
import NavBar from "./components/NavBar";
import LandingContent from "./components/LandingContent";
import CollectionInfoContent from './components/CollectionInfoContent'

const { Footer } = Layout;

const AppWrapper = styled(Layout)`
  background: white;
  height: 100%;
`;

function App() {
    const [currentStep, setCurrentStep] = useState('home');
  return (
    <AppWrapper>
        <Row>
            <NavBar />
        </Row>
        <Row>
                {currentStep === 'home' && <LandingContent setCurrentStep={setCurrentStep} />}
                {currentStep === 'collectInfo' && <CollectionInfoContent />}
        </Row>
            <Row center="xs">

                    <AppFooter />

            </Row>
    </AppWrapper>
  );
}

export default App;
