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
  background: #FFFFFF;
  display: flex;
`;

const Flex = styled(Col)`
  display: flex;
  justify-content: center;
`;

const CompanyName = styled(Title)`
  padding-top: 25px;
`;


function NavBar() {
  return (
    <ClearHeader style={{ width: '100%' }}>
      <Row style={{width: '100%'}} >
        <Flex span={12}>
          <TopLogo src={logo} alt="logo" />
          <CompanyName level={3}>Stay Safe, Keep Space</CompanyName>
        </Flex>
      </Row>
    </ClearHeader>
  );
}

export default NavBar;
