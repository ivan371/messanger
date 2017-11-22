import React from 'react';
import {Switch} from "react-router-dom";

export const layoutStyle = {
    content: {
        width: '1024px',
        height: '24px',
        background: 'DarkOrange',
    }
};

class LayoutComponent extends React.Component {
    render() {
        return (
            <div style={layoutStyle.content}>

            </div>
        );
    }
}

export default LayoutComponent;