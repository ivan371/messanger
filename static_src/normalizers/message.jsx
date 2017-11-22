import { normalize, schema } from 'normalizr';

export function chatsNormalize (chats) {
    const chat = new schema.Entity('chat');
    console.log(chats);
    return normalize(chats, [chat]);
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