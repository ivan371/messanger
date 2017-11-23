import {usersNormalize} from "../normalizers/users";
import {apiLoad} from "./load";
export const MODAL_OPEN = 'MODAL_OPEN';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';
export const LOAD_USERS = 'LOAD_USERS';


export function openModal(isOpen, modal, id) {
    return {
        type: MODAL_OPEN,
        isOpen,
        modal,
        id,
    };
}

export function loadUsers(url) {
    const types = [LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR];
    return apiLoad(url, 'GET', types, null, usersNormalize, false);
}