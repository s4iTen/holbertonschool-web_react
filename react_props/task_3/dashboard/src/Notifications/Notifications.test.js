import NotificationItem from './NotificationItem';
import React from 'react';
import { shallow } from "enzyme";
import { Notifications } from './Notifications';

describe("<Notifications />", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Notifications renders three NotificationItem components", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });
    it("Notifications renders the text Here is the list of notifications", () => {
        const text = "Here is the list of notifications";
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find(".Notifications p").text()).toEqual(text);
    });
    it('First NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const firstNotificationItem = wrapper.find(NotificationItem).first();
        expect(firstNotificationItem.prop('value')).toEqual('New course available');
    });
});