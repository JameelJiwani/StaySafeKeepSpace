import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { Grid, Row, Col } from 'react-flexbox-grid';
const { Footer } = Layout;

const ClearFooter = styled(Footer)`
  background: #ffffff;
  position: center;
  justify-content: center;
  margin: auto;
  align-items: center;
`;

function AppFooter() {
  return (
      <Col center="xs">
      <ClearFooter style={{ textAlign: "center" }}>
        Stay Safe, Keep Space ©2020
      </ClearFooter>
      </Col>
  );
}

export default AppFooter;
