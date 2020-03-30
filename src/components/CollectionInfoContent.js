import React, { useState } from "react";
import { Form, Layout, Checkbox, Button, Typography, Input, Modal } from "antd";
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
  border-radius: 5px;
  padding: 40px;
  padding-bottom: 20px;
  margin: auto;
`;

const BlockCol = styled(Col)`
  position: center;
  justify-content: center;
  background: #f5f5f5;
  width: 95%;
  border-radius: 5px;
  padding: 20px;
  align-items: center;
`;

const InnerCol = styled(Col)`
  margin-left: 180px;
  margin-right: 180px;
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
    border-color: lightblue !important;
  }
`;

const StyledInput = styled(Input)`
  border-radius: 5px;
  width: 34;
  margin: 10px;
  padding: 5px;
`;

const FormButton = styled(Button)`
  margin-top: 15px;
  border-radius: 5px;
  margin-left:200px;
  margin-right:200px;
  padding: 5px;
  width: 40%;
`;

function CollectionInfoContent(props) {
  const { setCurrentStep } = props;
  console.log("set current", props);
  const [options, setOptions] = useState({});

  // modal trigger
  const [ visible, setVisible] = useState(false);
  const [ product , setProduct] = useState('');
  // pop
  const triggerModal = (name) => {
    setVisible(true);
    setProduct(name);
  }
  // onClose 
  const closeModal = () => setVisible(false);
  const handleOk = () => {

    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };



  function toggleOptions(value) {
    let copyOptions = { ...options };
    console.log("copy", copyOptions)
    triggerModal(value);
    switch (value) {
      case "Face Masks":
        copyOptions.faceMask = copyOptions.faceMask === true ? false : true;
        setOptions(copyOptions);
        break;
      case "Goggles and Gloves":
        copyOptions.gloves = copyOptions.gloves === true ? false : true;
        setOptions(copyOptions);
        break;
      case "Hand Sanitizers":
        copyOptions.handSanitizer =
          copyOptions.handSanitizer === true ? false : true;
        setOptions(copyOptions);
        break;
      case "Full Body Suits":
        copyOptions.suit = copyOptions.suit === true ? false : true;
        setOptions(copyOptions);
        break;
      default:
    }
    console.log(options);
  }

  function submitData() {
    setCurrentStep('success');
  }

  return (
    <BlockContent>
      <BlockCol>
        <Row center="xs">
          <Title level={5}>What can you spare?</Title>
        </Row>
        <Row style={{ marginBottom: "15px" }} center="xs">
          <IconButton
            className={options.faceMask ? "selected" : ""}
            onClick={() => toggleOptions("Face Masks")}
          >
            <FaceMask />
            <label style={{ marginTop: "3px" }}>Face Mask</label>
          </IconButton>
          <IconButton
            className={options.gloves ? "selected" : ""}
            onClick={() => toggleOptions("Goggles and Gloves")}
          >
            <Gloves />
            <label style={{ marginTop: "3px" }}>Goggles & Gloves</label>
          </IconButton>
          <IconButton
            className={options.handSanitizer ? "selected" : ""}
            onClick={() => toggleOptions("Hand Sanitizers")}
          >
            <HandSanitizer />
            <label style={{ marginTop: "3px" }}>Sanitization Products</label>
          </IconButton>
          <IconButton
            className={options.suit ? "selected" : ""}
            onClick={() => toggleOptions("Full Body Suits")}
          >
            <Suit />
            <label style={{ marginTop: "3px" }}>Full body suits</label>
          </IconButton>
        </Row>
        <InnerCol>
        <Row left="xs" width="60px" style={{ paddingLeft: "15px" }}>
          <Title level={3}>Please enter a pickup location</Title>
        </Row>
        <Row>
          <StyledInput placeholder="Enter your locality.." size="large" />
        </Row>
        </InnerCol>
        <Row center="xs">
          <FormButton type="primary" onClick={() => submitData()}>
            Donate
          </FormButton>
        </Row>
      </BlockCol>

      <div>
      <Modal
            visible={visible}
            title={product}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                Submit
              </Button>,
            ]}
        >
          <Form.Item>
            <Title level={3}>More Information</Title>
          </Form.Item>
          <Form.Item
              name="description"
              rules={[{ required: true, message: " " }]}
          >
            <StyledInput placeholder="Description" />
          </Form.Item>
          <Form.Item
              name="quantity"
              rules={[{ required: true, message: " " }]}
          >
            <StyledInput placeholder="quantity" />
          </Form.Item>

        </Modal>
      </div>
    </BlockContent>
  );
}

export default CollectionInfoContent;
