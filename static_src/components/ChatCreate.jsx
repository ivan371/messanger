import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {chatStyle} from "./Chat";
import {openModal} from "../actions/users";

class ChatCreateComponent extends React.Component {
    state = {
        style: {}
    };
    onOpen = () => {
        this.props.openModal(true, 'chat');
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
                 onClick={this.onOpen}
            >
                Создать новый чат
            </div>
        );
    }
}

ChatCreateComponent.propTypes = {
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            openModal,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ChatCreateComponent);
