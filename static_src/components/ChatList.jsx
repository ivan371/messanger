import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadChats} from "../actions/message";
import {chatUrl} from "../constants";
import Chat from "./Chat";
import MessageList from "./MessageList";
import ChatCreate from "./ChatCreate";
import DoubleChat from "./DoubleChat";
import Modal from "./Modal";
import ChatForm from "./ChatForm";
import ChatUserList from "./ChatUserList";

export const chatListStyle = {
    content: {
        display: 'flex',
    },
    chats: {
        width: '256px',
        borderRight: '1px solid DarkOrange',
        display: 'flex',
        flexDirection: 'column',
    }
};

class ChatListComponent extends React.Component {

    componentDidMount() {
        this.props.loadChats(chatUrl.chatUrl);
    }

    render() {
        let chatList = [];
        let messageList = [];
        let modal = null;
        if (this.props.isLoading) {
            chatList = this.props.chatList.map(
                (chatId) => {
                    return <Chat key={ chatId } id={ chatId } />
                }
            );
        }
        if(this.props.isModalOpen) {
            switch (this.props.modalValue) {
                case 'chat':
                    modal = <Modal><ChatForm/></Modal>;
                    break;
                case 'chatUser':
                    modal = <Modal><ChatUserList/></Modal>;
                    break;
            }
        }
        else {
            modal = null;
        }
        if (this.props.match.params.id)
            messageList = <MessageList id={parseInt(this.props.match.params.id)}/>;
        else
            messageList = [];
        return (
            <div style={chatListStyle.content}>
                <div style={chatListStyle.chats}>
                    <ChatCreate/>
                    <DoubleChat/>
                    {chatList}
                </div>
                {messageList}
                {modal}
            </div>
        );
    }
}

const mapStoreToProps = (state, props) => ({
    isLoading: state.message.isLoading,
    chats: state.message.chats,
    chatList: state.message.chatList,
    modalValue: state.users.modalValue,
    isModalOpen: state.users.isModalOpen,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            loadChats,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ChatListComponent);
