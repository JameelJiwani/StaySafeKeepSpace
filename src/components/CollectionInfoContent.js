import React, { useState } from "react";
import { Form, Layout, Checkbox, Button, Typography, Input } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FaceMask from "../Icons/FaceMask";
import Gloves from "../Icons/Gloves";
import HandSanitizer from "../Icons/HandSanitizer";
import Suit from "../Icons/Suit";

const { Content } = Layout;
const { Title } = Typography;

const BlockContent = styled(Content)`
  display: flex;
  position: center;
  justify-content: center;
  flex-direction: row;
  background: #f5f5f5;
  border-radius: 5px;
  padding: 40px;
  padding-bottom: 200px;
  margin: auto;
`;

const IconButton = styled(Button)`
  display: flex;
  margin: 15px;
  border-radius: 15px;
  padding-bottom: 32px;
  &&.ant-btn:hover,
  .ant-btn:focus {
    border-color: #00000000;
  }
  && {
    border-color: #00000000;
  }
  &&.selected {
    border-color: blue !important;
  }
`;

const StyledInput = styled(Input)`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;

const FormButton = styled(Button)`
  margin-top: 15px;
  border-radius: 5px;
  width: 60%;
`;

function CollectionInfoContent() {
  const [options, setOptions] = useState({});

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function toggleOptions(value) {
    let copyOptions = { ...options };
    switch (value) {
      case "faceMask":
        copyOptions.faceMask = copyOptions.faceMask === true ? false : true;
        setOptions(copyOptions);
        break;
      case "gloves":
        copyOptions.gloves = copyOptions.gloves === true ? false : true;
        setOptions(copyOptions);
        break;
      case "handSanitizer":
        copyOptions.handSanitizer =
          copyOptions.handSanitizer === true ? false : true;
        setOptions(copyOptions);
        break;
      case "suit":
        copyOptions.suit = copyOptions.suit === true ? false : true;
        setOptions(copyOptions);
        break;
      default:
    }
    console.log(options);
  }

  return (
    <BlockContent>
      <Col>
        <Row center="xs">
          <Title level={5}>Submission</Title>
        </Row>
        <Row style={{ marginBottom: "15px" }}>
          <IconButton
            className={options.faceMask ? "selected" : ""}
            onClick={() => toggleOptions("faceMask")}
          >
            <FaceMask />
            <label style={{ marginTop: "3px" }}>Face Mask</label>
          </IconButton>
          <IconButton
            className={options.gloves ? "selected" : ""}
            onClick={() => toggleOptions("gloves")}
          >
            <Gloves />
            <label style={{ marginTop: "3px" }}>Goggles & Gloves</label>
          </IconButton>
          <IconButton
            className={options.handSanitizer ? "selected" : ""}
            onClick={() => toggleOptions("handSanitizer")}
          >
            <HandSanitizer />
            <label style={{ marginTop: "3px" }}>Sanitization Products</label>
          </IconButton>
          <IconButton
            className={options.suit ? "selected" : ""}
            onClick={() => toggleOptions("suit")}
          >
            <Suit />
            <label style={{ marginTop: "3px" }}>Full body suits</label>
          </IconButton>
        </Row>
        <Row left="xs" style={{ paddingLeft: "15px" }}>
          <Title level={3}>Address</Title>
        </Row>
        <Row>
          <StyledInput placeholder="Address Here" size="large" />
        </Row>
        <Row center="xs">
          <FormButton type="primary" htmlType="submit">
            Donate
          </FormButton>
        </Row>
      </Col>
    </BlockContent>
  );
}

export default CollectionInfoContent;
