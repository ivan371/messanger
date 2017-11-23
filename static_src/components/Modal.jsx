import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {loadUsers, openModal} from "../actions/users";
import {chatUrl, userUrl} from "../constants";
import {loadChatUsers} from "../actions/message";
import PropTypes from 'prop-types';

export const modalStyle = {
    modal: {
        position: 'absolute',
        top: '100px',
        right: '250px',
        left: '250px',
        paddingBottom: '48px',
        overflow: 'hidden',
        zIndex: '2000',
        background: 'black',
        textAlign: 'center',
    },
    modalContainer: {
        background: '#212528',
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        zIndex: '1000',
        opacity: '.9',
    },
    modalButton: {
        margin: '0 auto',
        border: '1px solid SaddleBrown',
        borderRadius: '5px',
        backgroundColor: 'DarkOrange',
    }
};

class ModalComponent extends React.Component {
    componentWillMount() {
        switch (this.props.modalValue) {
            case 'chatUser':
                this.props.loadChatUsers(chatUrl.chatUserUrl + '?chat=' + this.props.id);
                break;
            case 'chatUserAdd':
                this.props.loadUsers(userUrl.userUrl + '?chat=' + this.props.id);
                break;
        }
    }
    modalClose = () => {
        this.props.openModal(false);
    };
    render () {
        return (
            <div style={modalStyle.modalContainer}>
                <div style={modalStyle.modal}>
                    {this.props.children}
                    <button onClick={ this.modalClose } style={modalStyle.modalButton}>Закрыть</button>
                </div>
            </div>
        )
    }
}

ModalComponent.propTypes = {
    id: PropTypes.number,
};

const mapStoreToProps = (state, props) => ({
    modalValue: state.users.modalValue,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            openModal,
            loadChatUsers,
            loadUsers,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ModalComponent);