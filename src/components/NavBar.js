import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import styled from 'styled-components';
import logo from '../logo.svg';

const { Header } = Layout;
const { Title } = Typography;

const TopLogo = styled.img`
  height: 50px;
`;

const ClearHeader = styled(Header)`
  background: #FFFFFF;
  display: flex;
`;

const Flex = styled(Col)`
  display: flex;
  justify-content: center;
`;


function NavBar() {
  return (
    <ClearHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Row style={{width: '100%'}} >
        <Flex span={12}>
          <TopLogo src={logo} alt="logo" />
          <Title level={3}>Stay Safe, Keep Space</Title>
        </Flex>
      </Row>
    </ClearHeader>
  );
}

export default NavBar;
