import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {chatStyle} from "./Chat";

class DoubleChatComponent extends React.Component {
    state = {
        style: {}
    };
    render () {
        return (
            <div style={Object.assign({}, chatStyle.content, this.state.style)}
                     onMouseOver={() => {this.setState({
                         style: {
                             backgroundColor: 'rgba(255, 140, 0, 0.3)',
                             cursor: 'pointer',
                         }
                     })}}
                     onMouseOut={() => {this.setState({
                         style: {
                             backgroundColor: 'white',
                             cursor: 'default',
                         }
                     })}}
            >
                Добавить собеседника
            </div>
        );
    }
}

DoubleChatComponent.propTypes = {
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(DoubleChatComponent);
