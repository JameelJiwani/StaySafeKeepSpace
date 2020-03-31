import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Tooltip, Button, Typography, message } from 'antd';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import firebase from '../../firebase';
import {subscribe} from 'react-contextual';
import { getUser } from '../../api';
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

  useEffect(()=>{
    if( props.user.loggedIn)
    {
      setCurrentStep('collectInfo');
    }
  },[]);
 const onFinish = async values => {
    console.log("Received values of form: ", values);

    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;
    const password = values.password;
    
    try {
      const signedUpUser = await firebase.auth()
      .createUserWithEmailAndPassword(
        email,
        password
      );
      
    if( signedUpUser){
        console.log("hellloooo", signedUpUser);
      const db = await firebase.firestore()
        .doc(`users/${signedUpUser.user.uid}`)
        .set({
          firstName,
          lastName,
          email,
          type: 'donor'
        },
        {
          merge: true
        });
        console.log("hello", signedUpUser.user.uid)
      const userInfo = await getUser(signedUpUser.user.uid);
      console.log("get user ", userInfo);

      props.updateUser({
        ...userInfo, 
        loggedIn: true,
        loading: false,
      });

      setCurrentStep('collectInfo');
     }

    } catch(error ){
      console.log(error);
      message.error(error.message);
    }   

  };

  return (
    <Row fluid="true">
      <Col center="xs">
        <CTAContainer span={12}>
          <FlexForm name="normal_login" onFinish={onFinish}>
            <Form.Item>
              <Title level={3}>Arrange a pickup today</Title>
            </Form.Item>
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: " " }]}
            >
              <StyledInput placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: " " }]}
            >
              <StyledInput placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: " " }]}
            >
              <StyledInput placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: " " }]}
            >
              <Input.password />
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

export default subscribe()(LandingContent);
