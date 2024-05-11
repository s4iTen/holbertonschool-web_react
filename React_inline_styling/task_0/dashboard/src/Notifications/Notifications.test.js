import NotificationItem from './NotificationItem';
import React from 'react';
import { shallow } from "enzyme";
import { Notifications } from './Notifications';

describe("<Notifications />", () => {


    it("Notifications renders correctly if listNotifications is not passed", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find(NotificationItem)).toHaveLength(0);
    });

    it("Notifications renders correctly if listNotifications is an empty array", () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(0);
    });

    it("Notifications renders the right number of NotificationItem when listNotifications is passed", () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },
        ];
        const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    });

    it("Notifications does not display 'Here is the list of notifications' when listNotifications is empty", () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
    });

    it("Notifications displays 'No new notification for now' when listNotifications is empty", () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
        expect(wrapper.text()).toContain('No new notification for now');
    });

    it('calls console.log with correct message when markAsRead is called', () => {
        const spy = jest.spyOn(console, 'log');
        const notifications = [
            { id: 1, type: 'default', value: 'New course available', html: null },
            { id: 2, type: 'urgent', value: 'New resume available', html: { __html: '<u>test</u>' } },
            { id: 3, type: 'default', value: 'New data available', html: null },
        ];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
        wrapper.instance().markAsRead(1);
        expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
        spy.mockRestore();
    });
    it("Notifications does not rerender when updating the props with the same list", () => {
    const listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },
    ];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications });
    expect(shouldUpdate).toBe(false);
});

it("Notifications does rerender when updating the props with a longer list", () => {
    const listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },
    ];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    const longerListNotifications = [...listNotifications, { id: 4, type: 'default', value: 'Another notification' }];
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: longerListNotifications });
    expect(shouldUpdate).toBe(true);
});
});