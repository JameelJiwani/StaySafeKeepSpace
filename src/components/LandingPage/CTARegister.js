import React from 'react';
import {Form, Input, Select, Tooltip, Col, Button, Typography} from 'antd';
import styled from 'styled-components';

const { Option } = Select;
const { Title } = Typography;


const CTAContainer = styled(Col)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FlexForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #F5F5F5;
  border-radius: 5px;
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
    justify-content: center;
    width: 100%;
    && .ant-form-item-control-input-content {
        display: flex;
        justify-content: center;
    }
`;


function LandingContent(props) {
    const { setCurrentStep } = props;
    const onFinish = values => {
        console.log(values);
        setCurrentStep('collectInfo');
    };

    return (
        <CTAContainer span={12}>
            <FlexForm name="normal_login" onFinish={onFinish}>
                <Form.Item>
                    <Title level={3}>Register</Title>
                </Form.Item>
                <Form.Item
                    name="firstname"
                    noStyle
                    rules={[{ required: true, message: "First name is required" }]}
                >
                    <StyledInput placeholder="First Name" />
                </Form.Item>
                <Form.Item
                    name="lastname"
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
                    <FormButton type="primary" htmlType="submit" disabled={false}>
                        Register
                    </FormButton>
                </FormItem>
            </FlexForm>
        </CTAContainer>
    );
}

export default LandingContent;
