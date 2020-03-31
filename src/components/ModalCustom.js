import React from 'react';
import { subscribe } from 'react-contextual';
import styled from 'styled-components';
import { Modal, Button, Input, Form ,Typography} from 'antd';

const { Title } = Typography;
const StyledInput = styled(Input)`
  border-radius: 5px;
  width: 34;
  margin: 10px;
  padding: 5px;
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

const FormButton = styled(Button)`
  margin-top: 15px;
  border-radius: 5px;
  margin-left:200px;
  margin-right:200px;
  padding: 5px;
  width: 40%;
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

const ModalCustom = subscribe()((props) => {
  
  const { isVisible } = props.modal;

  // find the selected product
  var selected = [];
  if(props.items)
    selected = props.items.filter( e => e.name === props.name);

  // store the values
  const amount = selected.length === 0 ? "" : selected[0].amount;
  const description = selected.length === 0 ? "" : selected[0].description;

  const addProductToList = (name, amount, description) => {
    var product = {
      name,
      description,
      amount,
    };
    props.pushProduct(props.name,product)
    props.updateModalIsVisible(isVisible);
  };

  const onFinish = values => {
    addProductToList(props.name, values.amount, values.description);
  };

return (
  <Modal
      destroyOnClose={true}
      closable={true}
      visible={isVisible}
      title={props.name}
      onCancel={()=> props.updateModalIsVisible(isVisible)}
      footer={[
        <Button key="back" onClick={() => props.updateModalIsVisible(isVisible)}>
          Return
        </Button>
      ]}
  >
  <FlexForm onFinish={onFinish}>
    <Form.Item>
      <Title level={3}>More Information</Title>
    </Form.Item>
    
    <Form.Item
      name="description"
      rules={[{ required: true, message: " " }]}
    >
      <StyledInput placeholder={!description? "Description" :description}/>
    </Form.Item>
    <Form.Item
      name="amount"
      rules={[{ required: true, message: " " }]}
    >
      <StyledInput placeholder={!amount? "Duantity" :amount} />
    </Form.Item>
    <FormItem>
      <FormButton type="primary" htmlType="submit">
        Add
      </FormButton>
    </FormItem>
    </FlexForm>
  </Modal>
);
});

export default ModalCustom;
