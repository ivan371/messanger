import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

export const messageStyle = {
    message: {
        display: 'flex',
        width: '372px',
        margin: '12px auto',
    },
    messageAvatar: {
        margin: '12px',
    },
    content: {
        width: '200px'
    },
    contentAvatar: {
        width: '40px',
        height: '40px',
        borderRadius: '20px',
    }
};

class MessageComponent extends React.Component {
    render () {
        return (
            <div style={messageStyle.message}>
                <div style={messageStyle.messageAvatar}>
                    <img src={this.props.avatar} style={messageStyle.contentAvatar}/>
                </div>
                <div style={messageStyle.content}>
                    <p>{this.props.first_name} {this.props.last_name}</p>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

MessageComponent.propTypes = {
    id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    text: state.message.messages[props.id].text,
    first_name: state.users.users[state.message.messages[props.id].author].first_name,
    last_name: state.users.users[state.message.messages[props.id].author].last_name,
    avatar: state.users.users[state.message.messages[props.id].author].avatar,
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
)(MessageComponent);