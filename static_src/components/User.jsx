import React from 'react';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {messageFormStyle} from "./MessageForm";

export const chatUserStyle = {
    content: {
        color: 'white',
        display: 'flex',
        margin: '12px auto',
        width: '200px',
    }
};

class UserComponent extends React.Component {
    render () {
        return (
            <div style={chatUserStyle.content}>
                <div>
                    <img src="/static/img/add.png" style={messageFormStyle.img} onClick={this.onOpenAdd}/>
                </div>
                <div>
                    <p>{this.props.first_name} {this.props.last_name}</p>
                </div>
            </div>
        )
    }
}

UserComponent.propTypes = {
    id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    first_name: state.users.users[props.id].first_name,
    last_name: state.users.users[props.id].last_name,
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
)(UserComponent);