import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../connect/actions'
import { Form, Input, Button, Typography } from "antd";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
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

function CTARegister(props) {
  const dispatch = useDispatch();
  const { setCurrentStep } = props;
  const { loggedIn } = props.user;
  useEffect(() => {
    if (loggedIn) {
      setCurrentStep("collectInfo");
    }
  }, [loggedIn,setCurrentStep]);

  const onFinish = async values => {
    // const firstName = values.firstName;
    // const lastName = values.lastName;
    const email = values.email;
    const password = values.password;

    dispatch(loginUser(email, password));
    setCurrentStep("collectInfo");

    // setCurrentStep("collectInfo");
      // const signedUpUser = await firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password);
      //
      // if (signedUpUser) {
      //   console.log(signedUpUser);
      //   // await firebase
      //   //   .firestore()
      //   //   .doc(`users/${signedUpUser.user.uid}`)
      //   //   .set(
      //   //     {
      //   //       firstName,
      //   //       lastName,
      //   //       email,
      //   //       type: "donor"
      //   //     },
      //   //     { merge: true }
      //   //   );
      //   //
      //   // const userInfo = await getUser(signedUpUser.user.uid);
      //
      //   // TODO: This doesn't do anything useful
      //   console.log( "TITTIES");
      //   // await props.updateUser({
      //   //   ...userInfo,
      //   //   loggedIn: true,
      //   //   loading: false
      //   // });
      //
      //   setCurrentStep("collectInfo");
      // }
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
            <Form.Item name="email" rules={[{ required: true, message: " " }]}>
              <StyledInput placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: " " }]}
            >
              <Input.Password />
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

export default CTARegister;
