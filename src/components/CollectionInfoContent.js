import React, {useState} from 'react';
import { Layout, Checkbox, Button } from 'antd';
import styled from "styled-components";
import FaceMask from '../Icons/FaceMask';
import Gloves from '../Icons/Gloves';
import HandSanitizer from '../Icons/HandSanitizer';
import Suit from '../Icons/Suit';

const { Content } = Layout;

const BlockContent = styled(Content)`
  display: flex;
`;

const IconButton = styled(Button)`
  &&.ant-btn:hover, .ant-btn:focus {
    border-color: #00000000
  }
  && {
    border-color: #00000000
  }
  &&.selected {
    border-color: blue !important;
  }
`;

function CollectionInfoContent() {

    const [ options, setOptions ] = useState({});

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    function toggleOptions(value) {
        let copyOptions = {...options};
        switch(value) {
            case 'faceMask':
                copyOptions.faceMask = copyOptions.faceMask === true ? false : true;
                setOptions(copyOptions);
                break;
            case 'gloves':
                copyOptions.gloves = copyOptions.gloves === true ? false : true;
                setOptions(copyOptions);
                break;
            case 'handSanitizer':
                copyOptions.handSanitizer = copyOptions.handSanitizer === true ? false : true;
                setOptions(copyOptions);
                break;
            case 'suit':
                copyOptions.suit = copyOptions.suit === true ? false : true;
                setOptions(copyOptions);
                break;
            default:
        }
        console.log(options);
    }

    return (
        <BlockContent>
                <IconButton className={options.faceMask ? 'selected' : ''} onClick={() => toggleOptions("faceMask")}>
                    <FaceMask/>
                </IconButton>
                <label>Face Mask</label>
                <IconButton className={options.gloves ? 'selected' : ''} onClick={() => toggleOptions("gloves")}>
                    <Gloves/>
                </IconButton>
                <label>Goggles & Gloves</label>
                <IconButton className={options.handSanitizer ? 'selected' : ''} onClick={() => toggleOptions("handSanitizer")}>
                    <HandSanitizer/>
                </IconButton>
                <label>Sanitization Products</label>
                <IconButton className={options.suit ? 'selected' : ''} onClick={() => toggleOptions("suit")}>
                    <Suit/>
                </IconButton>
                <label>Full body suits</label>
        </BlockContent>
    );
}

export default CollectionInfoContent;
