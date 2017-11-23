import update from 'react-addons-update';
import {LOAD_USERS, LOAD_USERS_SUCCESS, MODAL_OPEN} from "../actions/users";

const inititalStore = {
    users: {},
    isLoading: false,
    userList: [],
    count: 0,
    isModalOpen: false,
    modalValue: null,
    idModal: null,
};

export default function message (store = inititalStore, action) {
    if (action.hasOwnProperty('payload')) {
        if (action.payload !== undefined) {
            if (action.payload.hasOwnProperty('entities')) {
                if (action.payload.entities.hasOwnProperty('user')) {
                    store = update(store, {
                        users: {
                            $merge: action.payload.entities.user,
                        },
                    });
                }
            }
        }
    }
    switch (action.type) {
        case LOAD_USERS:
            return update(store, {
                isLoading: {
                    $set: false,
                }
            });
        case LOAD_USERS_SUCCESS:
            return update(store, {
                isLoading: {
                    $set: true,
                },
                userList: {
                    $set: action.payload.result,
                }
            });
        case MODAL_OPEN:
            if(action.modal !== undefined) {
                store = update(store, {
                    modalValue: {
                        $set: action.modal,
                    },
                });
            }
            if(action.id !== undefined) {
                store = update(store, {
                    idModal: {
                        $set: action.id,
                    },
                });
            }
            return update(store, {
                isModalOpen: {
                    $set: action.isOpen,
                },
            });
    }
    return store;
}