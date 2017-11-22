import {apiLoad} from "./load";
import {
    chatsNormalize, messagesNormailze, messageNormailze, chatNormalize,
    chatuserNormalize
} from "../normalizers/message";
export const LOAD_CHAT_SUCCESS = 'LOAD_CHAT_SUCCESS';
export const LOAD_CHAT = 'LOAD_CHAT';
export const LOAD_CHAT_ERROR = 'LOAD_CHAT_ERROR';
export const LOAD_CHATS_SUCCESS = 'LOAD_CHATS_SUCCESS';
export const LOAD_CHATS = 'LOAD_CHATS';
export const LOAD_CHATS_ERROR = 'LOAD_CHATS_ERROR';
export const LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const LOAD_MESSAGES_ERROR = 'LOAD_MESSAGES_ERROR';
export const LOAD_MESSAGE_SUCCESS = 'LOAD_MESSAGE_SUCCESS';
export const LOAD_MESSAGE = 'LOAD_MESSAGES';
export const LOAD_MESSAGE_ERROR = 'LOAD_MESSAGE_ERROR';
export const LOAD_CHATUSERS = 'LOAD_CHATUSERS';
export const LOAD_CHATUSERS_SUCCESS = 'LOAD_CHATUSERS_SUCCESS';
export const LOAD_CHATUSERS_ERROR = 'LOAD_CHATUSERS_ERROR';

export function loadChats(url) {
    const types = [LOAD_CHATS, LOAD_CHATS_SUCCESS, LOAD_CHATS_ERROR];
    return apiLoad(url, 'GET', types, null, chatsNormalize, false);
}

export function chatCreate(url, name) {
    const types = [LOAD_CHAT, LOAD_CHAT_SUCCESS, LOAD_CHAT_ERROR];
    return apiLoad(url, 'POST', types, JSON.stringify({name, last_message: ''}), chatNormalize, true);
}

export function loadChatUsers(url) {
    const types = [LOAD_CHATUSERS, LOAD_CHATUSERS_SUCCESS, LOAD_CHATUSERS_ERROR];
    return apiLoad(url, 'GET', types, null, chatuserNormalize, false);
}

export function loadMessages(url) {
    const types = [LOAD_MESSAGES, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_ERROR];
    return apiLoad(url, 'GET', types, null, messagesNormailze, false);
}

export function messageCreate(url, text, chat) {
    const types = [LOAD_MESSAGE, LOAD_MESSAGE_SUCCESS, LOAD_MESSAGE_ERROR];
    return apiLoad(url, 'POST', types, JSON.stringify({text, chat}), messageNormailze, true);
}