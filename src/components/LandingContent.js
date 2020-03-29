import React from 'react';
import { Layout, Typography } from 'antd';
import ValueProp from './LandingPage/ValueProp'
import CTARegister from './LandingPage/CTARegister'
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
const { Content } = Layout;


const Flex = styled(Col)`
  display: flex;
  justify-content: center;
`;

const BlockContent = styled(Content)`
  display: flex;
`;


function LandingContent() {
    return (
        <BlockContent>
            <Grid fluid>
                <Row center="xs">
                <Col center="xs">
                 <ValueProp />
                </Col>
                <Col center="xs">
                 <CTARegister />
                </Col>
                    </Row>
            </Grid>
        </BlockContent>
    );
}

export default LandingContent;
