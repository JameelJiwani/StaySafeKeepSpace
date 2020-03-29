import React from 'react';
import { Layout, Checkbox } from 'antd';
import styled from 'styled-components';
import FaceMask from '../Icons/FaceMask'

const { Content } = Layout;

const BlockContent = styled(Content)`
  display: flex;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Checkboxx = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} />
    </CheckboxContainer>
);

function CollectionInfoContent() {

    // function onChange(checkedValues) {
    //     console.log('checked = ', checkedValues);
    // }

    return (
        <BlockContent>
            <Checkbox.Group defaultValue="a">
                <Checkboxx />
            </Checkbox.Group>
        </BlockContent>
    );
}

export default CollectionInfoContent;
