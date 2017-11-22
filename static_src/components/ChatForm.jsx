import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {modalStyle} from "./Modal";
import {chatCreate} from "../actions/message";
import {chatUrl} from "../constants";
import {openModal} from "../actions/users";

export const chatFromStyle = {
    pForm: {
        color: 'white',
    }
};

class ChatFormComponent extends React.Component {

    state = {
        name: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onCreate = () => {
        this.props.chatCreate(chatUrl.chatUrl, this.state.name);
        this.props.openModal(false);
    };

    render () {
        return (
            <div>
                <p style={chatFromStyle.pForm}>Название чата</p>
                <input name="name" value={this.state.name} onChange={this.onChange}/>
                <br/>
                <button style={modalStyle.modalButton} onClick={this.onCreate}>Создать</button>
            </div>
        )
    }
}

ChatFormComponent.propTypes = {
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            chatCreate,
            openModal,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ChatFormComponent);