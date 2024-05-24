// notifications.js

// Import the data directly from the JSON file
import notificationsData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
    // Filter the notificationsData based on the userId and return only the context property
    return notificationsData
        .filter(notification => notification.author.id === userId)
        .map(notification => notification.context);
}
