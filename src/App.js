import "antd/dist/antd.css";
import "./App.css";
import logo from "./logo.svg";
import React, { Component } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import AppFooter from "./AppFooter";
import NavBar from "./components/NavBar";
import LandingContent from "./components/LandingContent";

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
