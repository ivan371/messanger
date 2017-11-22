import update from 'react-addons-update';
import {MODAL_OPEN} from "../actions/users";

const inititalStore = {
    users: {},
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