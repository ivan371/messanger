import { normalize, schema } from 'normalizr';

export function usersNormalize (users) {
    const user = new schema.Entity('user');
    return normalize(users, [user]);
}