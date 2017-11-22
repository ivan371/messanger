import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class ChatUserListComponent extends React.Component {
    render () {
        return (
            <div>Список пользователей</div>
        )
    }
}

ChatUserListComponent.propTypes = {
     id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
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
)(ChatUserListComponent);