import NotificationItem from './NotificationItem';
import React from 'react';
import { shallow } from "enzyme";
import { Notifications } from './Notifications';

describe("<Notifications />", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Notifications renders three NotificationItem components when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });
    it("Notifications renders the text Here is the list of notifications when displayDrawer is true", () => {
        const text = "Here is the list of notifications";
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        expect(wrapper.find(".Notifications p").text()).toEqual(text);
    });
    it('First NotificationItem element renders the right html when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const firstNotificationItem = wrapper.find(NotificationItem).first();
        expect(firstNotificationItem.prop('value')).toEqual('New course available');
    });
    it('menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem').exists()).toEqual(true);
    });
    it('div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications').exists()).toEqual(false);
    });
    it('menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find('.menuItem').exists()).toEqual(true);
    });
    it('div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find('.Notifications').exists()).toEqual(true);
    });
});