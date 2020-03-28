import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Layout } from "antd";
import AppFooter from "./AppFooter";
import "antd/dist/antd.css";

const { Footer } = Layout;

const AppWrapper = styled(Layout)`
  background: #ffffff;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <LandingContent />
      <AppFooter />
    </AppWrapper>
  );
}

export default App;
