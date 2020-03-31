import React, {useEffect} from 'react';
import { Layout } from 'antd';
import ValueProp from './LandingPage/ValueProp'
import CTARegister from './LandingPage/CTARegister'
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import firebase from '../firebase'
import { subscribe } from 'react-contextual';
const { Content } = Layout;


const BlockContent = styled(Content)`
  display: flex;
`;

function LandingContent(props) {

  const { setCurrentStep } = props;
  const updateUser = props.updateUser;

  useEffect(() => {
    try {

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          updateUser({
            loggedIn: true
          });
          setCurrentStep('collectInfo');
       
        } else {
          updateUser({
            loggedIn: false
          });
        }
      });

    } catch (err) {
      updateUser({
        loggedIn: false
      });
    }

  }, [setCurrentStep, updateUser]);

  return (
    <BlockContent>
      <Grid fluid>
        <Row center="xs">
          <Col center="xs">
            <ValueProp />
          </Col>
          <Col center="xs">
            <CTARegister setCurrentStep={props.setCurrentStep} />
          </Col>
        </Row>
      </Grid>
    </BlockContent>
  );
}
export default subscribe()(LandingContent);
