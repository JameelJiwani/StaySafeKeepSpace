import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import ValueProp from './LandingPage/ValueProp'
import CTARegister from './LandingPage/CTARegister'
import styled from 'styled-components';

const { Content } = Layout;


const Flex = styled(Col)`
  display: flex;
  justify-content: center;
`;

const BlockContent = styled(Content)`
  display: flex;
`;


function LandingContent(props) {
    const { setCurrentStep } = props;
    return (
        <BlockContent>
            <Row style={{width: '100%', height: '100%'}} >
                <Flex span={12}>
                    <ValueProp />
                </Flex>
                <Flex span={12}>
                    <CTARegister setCurrentStep={setCurrentStep} />
                </Flex>
            </Row>
        </BlockContent>
    );
}

export default LandingContent;
