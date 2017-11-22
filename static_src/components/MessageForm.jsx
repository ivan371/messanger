import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {messageCreate} from "../actions/message";
import {chatUrl} from "../constants";
import Modal from "./Modal";
import {openModal} from "../actions/users";
import ChatUserList from "./ChatUserList";

export const messageFormStyle = {
    content: {
        width: '266px',
        margin: '12px auto',
        display: 'flex'
    },
    contentTextArea: {
        outline: 'none',
        resize: 'none',
        border: '1px solid DarkOrange',
    },
    img: {
        width: '40px',
        height: '40px',
        paddingLeft: '12px',
        cursor: 'pointer'
    }
};

class MessageFormComponent extends React.Component {
    state = {
        text: '',
    };
    onCreate = (e) => {
        if(e.keyCode === 13) {
            this.props.messageCreate(chatUrl.messageUrl + '/', this.state.text, this.props.id);
            this.setState({text: ''});
        }
    };
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    onOpen = () => {
        this.props.openModal(true, 'chatUser', this.props.id);
    };
    render () {
        return (
            <div style={messageFormStyle.content}>
                <div>
                    <textarea
                        style={messageFormStyle.contentTextArea}
                        cols="48"
                        placeholder="Введите сообщение"
                        onChange={this.onChange}
                        onKeyDown={this.onCreate}
                        name="text"
                        value={this.state.text}
                    />
                </div>
                <div>
                    <img src="/static/img/people.png" style={messageFormStyle.img} onClick={this.onOpen}/>
                </div>
            </div>
        )
    }
}

MessageFormComponent.propTypes = {
    id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            messageCreate,
            openModal,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(MessageFormComponent);