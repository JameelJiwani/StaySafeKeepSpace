import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import styled from 'styled-components';
import logo from '../logo.svg';

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

function NavBar() {
  return (
    <ClearHeader style={{ width: '100%' }}>
      <Row style={{ width: '100%' }}>
        <Flex>
          <TopLogo src={logo} alt="logo" />
          <CompanyName level={4}>Stay Safe, Keep Space</CompanyName>
        </Flex>
      </Row>
    </ClearHeader>
  );
}

export default NavBar;
