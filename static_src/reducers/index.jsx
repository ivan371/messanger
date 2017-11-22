import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import message from "./message";
import users from "./users";

export default combineReducers({
    routerReducer,
    message,
    users,
});
