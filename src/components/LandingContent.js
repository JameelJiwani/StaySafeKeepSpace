import React, {useEffect, useSate} from 'react';
import { Layout, Typography } from 'antd';
import ValueProp from './LandingPage/ValueProp'
import CTARegister from './LandingPage/CTARegister'
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import firebase from '../firebase'
import { subscribe } from 'react-contextual';
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

  useEffect(() => {
    try {

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          props.updateUser({
            loggedIn: true
          });
          setCurrentStep('collectInfo');
       
        } else {
          props.updateUser({
            loggedIn: false
          });
        }
      });

    } catch (err) {
      props.updateUser({
        loggedIn: false
      });
    }

  }, []);

    return (
        <BlockContent>
            <Grid fluid>
                <Row center="xs">
                <Col center="xs">
                 <ValueProp />
                </Col>
                <Col center="xs">
                  <CTARegister setCurrentStep={setCurrentStep} />
                </Col>
                    </Row>
            </Grid>
        </BlockContent>
    );
}

export default subscribe()(LandingContent);
