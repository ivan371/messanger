import update from 'react-addons-update';
import {LOAD_CHAT_SUCCESS, LOAD_MESSAGE_SUCCESS, LOAD_MESSAGES_SUCCESS} from "../actions/message";

const inititalStore = {
    isLoading: false,
    isMessageLoading: false,
    chatList: [],
    chats: {},
    messageList: [],
    messages: {},
    count: 0,
};

export default function message (store = inititalStore, action) {
    if (action.hasOwnProperty('payload')) {
        if (action.payload !== undefined) {
            if (action.payload.hasOwnProperty('entities')) {
                if (action.payload.entities.hasOwnProperty('chat')) {
                    store = update(store, {
                        chats: {
                            $merge: action.payload.entities.chat,
                        },
                    });
                }
                if (action.payload.entities.hasOwnProperty('message')) {
                    store = update(store, {
                        messages: {
                            $merge: action.payload.entities.message,
                        },
                    });
                }
            }
        }
    }
    switch (action.type) {
        case LOAD_CHAT_SUCCESS:
            return update(store, {
                isLoading: {
                    $set: true
                },
                chatList: {
                    $set: action.payload.result
                }
            });
        case LOAD_MESSAGES_SUCCESS:
            return update(store, {
                isMessageLoading: {
                    $set: true
                },
                messageList: {
                    $set: action.payload.result
                }
            });
        case LOAD_MESSAGE_SUCCESS:
            let index = store.chatList.indexOf(action.payload.entities.message[action.payload.result].chat);
            // console.log(store.chatList.splice(index, 1));
            store = update(store, {
                chatList: {
                    $splice: [[index, 1]],
                }
            });
            return update(store, {
                messageList: {
                    $push: [action.payload.result],
                },
                chatList: {
                    $unshift: [action.payload.entities.message[action.payload.result].chat],
                }
            });
        default:
            return store;
    }
}