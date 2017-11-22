import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {messageStyle} from "./Message";

export const chatStyle = {
    content: {
        padding: 'auto',
        paddingTop: '12px',
        paddingBottom: '12px',
        backgroundColor: 'white',
        paddingLeft: '12px',
        boxShadow: 'inset 0 0 6px rgba(255, 140, 0, 0.4)',
        display: 'flex',
    },
    contentA: {
        textDecoration: 'none',
        color: 'black',
    },
    contentMessage: {
        width: '40px',
        height: '40px',
        paddingRight: '12px',
    }
};

class ChatComponent extends React.Component {
    state = {
        style: {}
    };
    render() {
        return (
            <Link style={chatStyle.contentA} to={'/' + this.props.id}>
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
                    <div><img src="/static/img/message.png" style={chatStyle.contentMessage}/></div>
                    <div>
                        <b>{this.props.name}</b>
                        <br/>
                        {this.props.last_message}
                    </div>
                </div>
            </Link>
        );
    }
}

ChatComponent.propTypes = {
    id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    name: state.message.chats[props.id].name,
    last_message: state.message.chats[props.id].last_message,
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
)(ChatComponent);