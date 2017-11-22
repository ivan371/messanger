import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadMessages} from "../actions/message";
import {chatUrl} from "../constants";
import PropTypes from 'prop-types';
import Message from "./Message";
import MessageForm from "./MessageForm";

export const messageListStyle = {
    content: {
        width: '768px',
        // display: 'flex',
        // flexDirection: 'column',
        maxHeight: '500px',
        overflow: 'auto',
    },
    chat: {
        height: '100%',
    }
};

class MessageListComponent extends React.Component {
    componentDidMount() {
        this.props.loadMessages(chatUrl.messageUrl + '/?chat=' + this.props.id);
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.id !== nextProps.id) {
            this.props.loadMessages(chatUrl.messageUrl + '/?chat=' + nextProps.id);
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.isLoading)
            this.scroll();
    }
    scroll = () => {
        console.log(document.getElementsByClassName('messages')[0].scrollHeight);
        document.getElementsByClassName('messages')[0].scrollTo(0, document.getElementsByClassName('messages')[0].scrollHeight);
    };
    render () {
        let messageList = [];
        if (this.props.isLoading) {
            messageList = this.props.messageList.map(
                (chatId) => {
                    return <Message key={ chatId } id={ chatId } />
                }
            );
        }
        return (
            <div style={messageListStyle.chat}>
                <div style={messageListStyle.content} className="messages">
                    {messageList}
                </div>
                <MessageForm id={this.props.id}/>
            </div>
        )
    }
}

MessageListComponent.propTypes = {
    id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.message.isMessageLoading,
    messages: state.message.messages,
    messageList: state.message.messageList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            loadMessages,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(MessageListComponent);
