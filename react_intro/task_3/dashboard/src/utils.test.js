import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('returns correct string when argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('returns correct string when argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('returns correct string', () => {
    const expectedString = "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toEqual(expectedString);
  });
});
