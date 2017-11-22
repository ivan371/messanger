import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {modalStyle} from "./Modal";

export const chatFromStyle = {
    pForm: {
        color: 'white',
    }
};

class ChatFormComponent extends React.Component {
    render () {
        return (
            <div>
                <p style={chatFromStyle.pForm}>Название чата</p>
                <input/>
                <br/>
                <button style={modalStyle.modalButton}>Создать</button>
            </div>
        )
    }
}

ChatFormComponent.propTypes = {
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
)(ChatFormComponent);