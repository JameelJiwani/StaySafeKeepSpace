import React from 'react';
import { Form, Input, Select, Tooltip, Button } from 'antd';
import styled from 'styled-components';

const { Option } = Select;


const FlexForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #E2E2E2;
  margin: 100px;
  width: 100%;
`;

const FormItem = styled(Form.Item)`
  width: 100%;
`;


function LandingContent() {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <FlexForm name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <FormItem
                name="username"
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
            >
                <Input placeholder="Please input" />
            </FormItem>


            <FormItem
                name="username"
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
            >
                <Input placeholder="Please input" />
            </FormItem>

            <FormItem
                name="username"
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
            >
                <Input placeholder="Please input" />
            </FormItem>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </FlexForm>
    );
}

export default LandingContent;
