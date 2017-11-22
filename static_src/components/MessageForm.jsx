import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {messageCreate} from "../actions/message";
import {chatUrl} from "../constants";

export const messageFormStyle = {
    content: {
        width: '372px',
        margin: '12px auto',
    },
    contentTextArea: {
        outline: 'none',
        resize: 'none',
        border: '1px solid DarkOrange',
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
    render () {
        return (
            <div style={messageFormStyle.content}>
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
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(MessageFormComponent);