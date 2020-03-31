import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import Checkmark from "../Icons/Checkmark";
import {Typography} from "antd";
import styled from "styled-components";
import { Col } from 'react-flexbox-grid';

const { Title } = Typography;


const FlexContainer = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10%;
`;

const ValuePropTitle = styled(Title)`
  padding-top: 5%;
`;

const CenteredIcon = styled.div`
  display: flex;
  align-items: center;
`;


function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

function ThankYouContent() {
    const { width, height } = useWindowSize();
    return (
        <>
            <Confetti
                width={width}
                height={height}
            />
                <FlexContainer>
                    <ValuePropTitle>Thank you for your donation!</ValuePropTitle>
                    <Title level={3}>Keep an eye out for an email from us to schedule a pickup</Title>
                </FlexContainer>
            <CenteredIcon>
                <Checkmark />
            </CenteredIcon>


        </>
    );
}

export default ThankYouContent;
