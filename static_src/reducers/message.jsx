import update from 'react-addons-update';
import {
    LOAD_CHAT_SUCCESS, LOAD_CHATS, LOAD_CHATS_SUCCESS, LOAD_CHATUSERS, LOAD_CHATUSERS_SUCCESS, LOAD_MESSAGE_SUCCESS,
    LOAD_MESSAGES,
    LOAD_MESSAGES_SUCCESS
} from "../actions/message";

const inititalStore = {
    isLoading: false,
    isMessageLoading: false,
    isChatUsersLoading: false,
    chatList: [],
    chats: {},
    messageList: [],
    messages: {},
    count: 0,
    chatUsers: {},
    chatUserList: [],
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
                if (action.payload.entities.hasOwnProperty('chatuser')) {
                    store = update(store, {
                        chatUsers: {
                            $merge: action.payload.entities.chatuser,
                        },
                    });
                }
            }
        }
    }
    switch (action.type) {
        case LOAD_CHATS:
            return update(store, {
                isLoading: {
                    $set: false
                }
            });
        case LOAD_CHATS_SUCCESS:
            return update(store, {
                isLoading: {
                    $set: true
                },
                chatList: {
                    $set: action.payload.result
                }
            });
        case LOAD_CHATUSERS:
            return update(store, {
                isChatUsersLoading: {
                    $set: false,
                }
            });
        case LOAD_CHATUSERS_SUCCESS:
            return update(store, {
                isChatUsersLoading: {
                    $set: true,
                },
                chatUserList: {
                    $set: action.payload.result,
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
        case LOAD_MESSAGES:
            return update(store, {
                isMessageLoading: {
                    $set: false
                }
            });
        case LOAD_MESSAGE_SUCCESS:
            let index = store.chatList.indexOf(action.payload.entities.message[action.payload.result].chat);
            store = update(store, {
                chatList: {
                    $splice: [[index, 1]],
                },
                chats: {
                    [action.payload.entities.message[action.payload.result].chat]: {
                        last_message: {
                            $set: action.payload.entities.message[action.payload.result].text.substring(0, 32) + '...',
                        }
                    }
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
        case LOAD_CHAT_SUCCESS:
            return update(store, {
                chatList: {
                    $unshift: [action.payload.result],
                }
            });
        default:
            return store;
    }
}