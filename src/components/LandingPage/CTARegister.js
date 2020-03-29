import React, { useState } from 'react';
import { Form, Input, Select, Tooltip, Button, Typography } from 'antd';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import firebase from 'firebase';
import { DB_CONFIG } from '../../Config/config';

const { Option } = Select;
const { Title } = Typography;

const CTAContainer = styled(Col)`
  position: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  align-items: center;
`;

const FlexForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
`;

const StyledInput = styled(Input)`
  border-radius: 5px;
  width: 500px;
  margin: 10px;
  padding: 5px;
`;

const FormButton = styled(Button)`
  margin-top: 15px;
  border-radius: 5px;
  width: 85%;
`;

const FormItem = styled(Form.Item)`
  display: flex;
  padding: 20px;
  justify-content: center;
  width: 100%;
  && .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
`;

function LandingContent(props) {
    const { setCurrentStep } = props;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onFinish = values => {
    console.log("Received values of form: ", values);
    setFirstName(values.firstName);
    setEmail(values.email);
    setLastName(values.lastName);

    const db = firebase.firestore();

    const userRef = db.collection("users").add({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    });
    setCurrentStep('collectInfo');
  };

  return (
    <Row fluid>
      <Col center="xs">
        <CTAContainer span={12}>
          <FlexForm name="normal_login" onFinish={onFinish}>
            <Form.Item>
              <Title level={3}>Register</Title>
            </Form.Item>
            <Form.Item
              name="firstName"
              noStyle
              rules={[{ required: true, message: "First name is required" }]}
            >
              <StyledInput placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              noStyle
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <StyledInput placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="email"
              noStyle
              rules={[{ required: true, message: "Email is required" }]}
            >
              <StyledInput placeholder="Email" />
            </Form.Item>
            <FormItem>
              <FormButton type="primary" htmlType="submit">
                Register
              </FormButton>
            </FormItem>
          </FlexForm>
        </CTAContainer>
      </Col>
    </Row>
  );
}

export default LandingContent;
