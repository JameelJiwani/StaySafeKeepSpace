import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

const BlockContent = styled(Content)`
  display: flex;
`;


function CollectionInfoContent() {
    return (
        <BlockContent>
            <Row style={{width: '100%', height: '100%'}} >
                <p>hgfhdsfd</p>
            </Row>
        </BlockContent>
    );
}

export default CollectionInfoContent;
