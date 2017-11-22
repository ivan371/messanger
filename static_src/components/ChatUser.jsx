import React from 'react';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

export const chatUserStyle = {
    content: {
        color: 'white',
    }
};

class ChatUserComponent extends React.Component {
    render () {
        return (
            <div style={chatUserStyle.content}>
                <p>{this.props.first_name} {this.props.last_name}</p>
            </div>
        )
    }
}

ChatUserComponent.propTypes = {
    id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    first_name: state.users.users[state.message.chatUsers[props.id].user].first_name,
    last_name: state.users.users[state.message.chatUsers[props.id].user].last_name,
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
)(ChatUserComponent);