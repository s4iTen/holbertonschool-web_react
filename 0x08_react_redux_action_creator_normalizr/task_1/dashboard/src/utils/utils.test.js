const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');

describe('getFullYear function', () => {
    test('returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
});

describe('getFooterCopy function', () => {
    test('returns "Holberton School" when argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns "Holberton School main dashboard" when argument is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});


describe('getLatestNotification function', () => {
    test('returns the latest notification string', () => {
        const latestNotification = getLatestNotification();
        expect(typeof latestNotification).toBe('string');

    });
});