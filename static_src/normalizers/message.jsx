import { normalize, schema } from 'normalizr';

export function chatsNormalize (chats) {
    const chat = new schema.Entity('chat');
    console.log(chats);
    return normalize(chats, [chat]);
}
export function chatNormalize (chats) {
    const chat = new schema.Entity('chat');
    console.log(chats);
    return normalize(chats, chat);
}
export function messagesNormailze(messages) {
    const user = new schema.Entity('user');
    const message = new schema.Entity('message', {'author': user});
    return normalize(messages, [message]);
}

export function messageNormailze(messages) {
    const user = new schema.Entity('user');
    const message = new schema.Entity('message', {'author': user});
    return normalize(messages, message);
}

export function chatuserNormalize(chatusers) {
    const user = new schema.Entity('user');
    const chatuser = new schema.Entity('chatuser', {'user': user});
    return normalize(chatusers, [chatuser]);
}