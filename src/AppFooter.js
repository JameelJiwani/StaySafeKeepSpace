import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import 'antd/dist/antd.css';

const { Footer } = Layout;

const ClearFooter = styled(Footer)`
  padding-top: 7%;
  background: #ffffff;
  float: center;
`;

function AppFooter() {
  return (
    <div>
      <ClearFooter style={{ textAlign: "center" }}>
        Stay Safe, Keep Space ©2020 Created by WinHacks Team 4829843
      </ClearFooter>
    </div>
  );
}

export default AppFooter;
