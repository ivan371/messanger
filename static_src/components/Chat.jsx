import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export const chatStyle = {
    content: {
        padding: 'auto',
        paddingTop: '24px',
        paddingBottom: '24px',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    contentA: {
        textDecoration: 'none',
        color: 'black',
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
                    {this.props.name}
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