import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import User from "./User";

class UserListComponent extends React.Component {
    render () {
        let userList = [];
        if (this.props.isLoading) {
            userList = this.props.userList.map(
                (userId) => {
                    return <User key={ userId } id={ userId } />
                }
            );
        }
        return (
            <div>
                {userList}
            </div>
        )
    }
}


UserListComponent.propTypes = {
     id: PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    userList: state.users.userList,
    isLoading: state.users.isLoading,
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
)(UserListComponent);