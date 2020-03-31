import React from 'react';
import { Layout, Typography, Row, Col,Button } from 'antd';
import styled from 'styled-components';
import logo from '../logo.svg';
import { subscribe } from 'react-contextual';
import firebase from '../firebase';
const { Header } = Layout;
const { Title } = Typography;

const TopLogo = styled.img`
  height: 50px;
  margin: 15px;
`;

const ClearHeader = styled(Header)`
  background: #FFFFFF00;
  display: flex;
  margin-bottom: 20px;
`;

const Flex = styled(Col)`
  display: flex;
  justify-content: center;
`;

const CompanyName = styled(Title)`
  padding-top: 25px;
  white-space: nowrap;
`;

function NavBar(props) {
  
  const { setCurrentStep } = props;
  const signOut = async () => {
    await firebase.auth().signOut();
    props.updateUser({
      loggedIn: false
    });
    setCurrentStep('home');
  }

  return (
    <ClearHeader style={{ width: '100%' }}>
      <Row style={{ width: '100%' }}>
        <Col span={8}>
        <Flex>
          <TopLogo src={logo} alt="logo" />
          <CompanyName level={4}>Stay Safe, Keep Space</CompanyName>
        </Flex>
        </Col>

        {props.user.loggedIn? 
        <Col span={8} offset={8} content="true" >
          <div style={{justifyContent: 'center', textAlign: 'center', paddingTop: 10}}>
            <Button type="primary" danger onClick={signOut}> Sign Out</Button>
          </div>
        </Col> 
        :
        <></>
        }
  
        
      </Row>
    </ClearHeader>
  );
}

export default subscribe()(NavBar);
