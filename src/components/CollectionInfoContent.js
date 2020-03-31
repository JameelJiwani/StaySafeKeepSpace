import React, { useState } from "react";
import { Form, Layout, Button, Typography, Input, Modal, message, Tooltip } from "antd";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import FaceMask from "../Icons/FaceMask";
import Gloves from "../Icons/Gloves";
import HandSanitizer from "../Icons/HandSanitizer";
import Suit from "../Icons/Suit";
import { subscribe } from 'react-contextual';
import { createDonation } from '../api';
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
  width: 80%;
  border-radius: 5px;
  padding: 20px;
  padding-bottom: 40px;
  padding-top: 40px;
  align-items: center;
`;

const InnerCol = styled(Col)`
  margin-left: 12px;
  margin-right: 12px;
  align-items: center;
`;

const AddrInputCol = styled(Col)`
  display: flex;
  position: center;
  justify-content: center;
  align-items: center;
  width:400px;
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

const StyledModelInput = styled(Input)`
  border-radius: 5px;
  width: 250px;
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

const ModelButton = styled(Button)`
  margin-top: 15px;
  border-radius: 5px;
  margin-left: 100px;
  margin-right:100px;
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

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
  onChange = e => {
    const { value } = e.target;
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    if (onBlur) {
      onBlur();
    }
  };

  render() {
    const { value } = this.props;
    const title = value ? (
      <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
    ) : (
      'Input a number'
    );
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="Quantity"
          maxLength={25}
        />
      </Tooltip>
    );
  }
}

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <NumericInput style={{ width: 250 }} value={this.state.value} onChange={this.onChange} />
    );
  }
}


function CollectionInfoContent(props) {
  const { setCurrentStep } = props;
  const [options, setOptions] = useState({});

  const [ visible, setVisible] = useState(false);
  const [ address, setAddress] = useState('');
  const [ product , setProduct] = useState('');  

  const [isSet, setIsSet] = useState(false);
  const [items, setItems] = useState([]);
    // pop
    const triggerModal = (name) => {
      setVisible(true);
      setProduct(name);
    }

  function toggleOptions(value) {
    let copyOptions = { ...options };
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
  }

  async function submitData(e) {
    e.preventDefault();
    setCurrentStep('success');
    // TODO: take only zip code and conver to address WE can do that
    const payload = {
      products: items,
      address
    }
   
    const result = await createDonation(payload);
    if( !result){
      message.error("error create donation");
    }
  }

  function ModalCustom (props) {
    
      const found = items.find( e => e.name === props.name);
      const handleCancel = () => {
        setVisible(false);
      };
    
      const addProductToList = (name, amount, description) => {
       const remove = items.filter( e => e.name !== props.name);
        var product = {
          name,
          description,
          amount,
        };
      
        remove.push(product);
        setItems(remove);
        console.log("prodcut", product);
        console.log('list origin', items);
      
        setVisible(false);


      }
      const onFinish = values => {
        
        console.log("onfinish values of the product", values);
        addProductToList(props.name, values.amount, values.description);
      }
      
    return (
      <Modal
          closable={true}
          footer={null}
          visible={props.visible}
          title={props.name}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
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
    
          <StyledModelInput value={ !found ? "": props.products[product].description } placeholder="Description" />
        </Form.Item>
        <Form.Item
            name="amount"
            rules={[{ required: true, message: " " }]}
        >
        <NumericInputDemo value={ !found ? "": props.products[product].amount } placeholder="Quantity" />
        </Form.Item>
        <FormItem>
              <ModelButton type="primary" block htmlType="submit">
              Add
              </ModelButton>
        </FormItem>
        </FlexForm>
      </Modal>
      )
  };

  return (
    <BlockContent>
      <BlockCol>
        <Row center="xs">
          <Title level={2}>What can you donate?</Title>
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
            <label style={{ marginTop: "3px" }}>Full Body Suits</label>
          </IconButton>
        </Row>
        <InnerCol>
        <Row center="xs" width="60px" style={{ paddingLeft: "15px" }}>
          <Title level={3}>Please enter your drop off address</Title>
        </Row>
        </InnerCol>
        <Row center="xs">
          <AddrInputCol>
            <StyledInput placeholder=" Enter your drop off address" size="large"  onChange={e => setAddress(e.target.value)}/>
          </AddrInputCol>
        </Row>
        <Row center="xs">
          <FormButton type="primary" block onClick={(e) => submitData(e)}>
            Donate
          </FormButton>
        </Row>
      </BlockCol>

      <div>
      <ModalCustom visible={visible} name={product}/>
      </div>
    </BlockContent>
  );
}

export default subscribe()(CollectionInfoContent);
