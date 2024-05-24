import { normalize, schema } from 'normalizr';
import * as data from '../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity(
    'messages',
    {},
    { idAttribute: 'guid' }
);

const notification = new schema.Entity(
    'notifications',
    {
        author: user,
        context: message,
    }
);

const normalizedData = normalize(data.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
    const { notifications } = normalizedData.entities;

    return Object.values(notifications).filter(
        (notification) => notification.author === userId
    ).map((notification) => notification.context);
};

export default normalizedData;