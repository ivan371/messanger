import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {loadChatUsers} from "../actions/message";
import {chatUrl} from "../constants";
import ChatUser from "./ChatUser";

class ChatUserListComponent extends React.Component {
    componentWillMount() {
        this.props.loadChatUsers(chatUrl.chatUserUrl + '?chat=' + this.props.id);
    }
    render () {
        let chatUserList = [];
        if (this.props.isLoading) {
            chatUserList = this.props.chatUserList.map(
                (chatId) => {
                    return <ChatUser key={ chatId } id={ chatId } />
                }
            );
        }
        return (
            <div>
                {chatUserList}
            </div>
        )
    }
}

ChatUserListComponent.propTypes = {
     id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.message.isChatUsersLoading,
    chatUserList: state.message.chatUserList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            loadChatUsers,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ChatUserListComponent);