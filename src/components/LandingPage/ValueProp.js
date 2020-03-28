import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;


const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 150px;
`;

const ValuePropTitle = styled(Title)`
  padding-top: 50px;
`;



function LandingContent() {
    return (
        <FlexContainer>
            <ValuePropTitle>New way to donate PPE for those who need it most</ValuePropTitle>
            <Title level={3}>Sign up now, and donate your supplies</Title>
        </FlexContainer>
    );
}

export default LandingContent;
