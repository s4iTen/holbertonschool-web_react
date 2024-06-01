// Notification.js
import { normalize, schema } from 'normalizr';
import * as data from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

const normalizedData = normalize(data.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
    const { users, messages, notifications } = normalizedData.entities;

    return Object.values(notifications)
        .filter((notification) => {
            if (!notification.author) {
                console.log(`Notification ${notification.id} has no author`);
                return false;
            }
            const author = users[notification.author];
            return author && author.id === userId;
        })
        .map((notification) => {
            const message = messages[notification.context];
            return {
                guid: message.guid,
                isRead: notification.isRead || false,
                type: message.type,
                value: message.value,
            };
        });
};

export default normalizedData;
