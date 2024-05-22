jest.mock("aphrodite", () => ({
  StyleSheet: {
    create: jest.fn(() => ({
      notifications: {},
      buttonImg: {},
      p: {},
      default: {},
      urgent: {},
    })),
  },
  css: jest.fn().mockImplementation(() => "className"),
  StyleSheetTestUtils: {
    suppressStyleInjection: jest.fn(),
  },
}));

import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("Notifications renders correctly if listNotifications is not passed", () => {
    const wrapper = shallow(
      <Notifications displayDrawer handleDisplayDrawer={() => {}} handleHideDrawer={() => {}} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });

  it("Notifications renders correctly if listNotifications is an empty array", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });

  it("Notifications renders the right number of NotificationItem when listNotifications is passed", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: {
          __html: "<strong>Urgent requirement</strong> - complete by EOD!",
        },
      },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={listNotifications}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
  });

  it("Notifications does not display 'Here is the list of notifications' when listNotifications is empty", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    expect(wrapper.text()).not.toContain("Here is the list of notifications");
  });

  it("Notifications displays 'No new notification for now' when listNotifications is empty", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    expect(wrapper.text()).toContain("No new notification for now");
  });

  it("calls console.log with correct message when markAsRead is called", () => {
    const notifications = [
      { id: 1, type: "default", value: "New course available", html: null },
      {
        id: 2, type: "urgent", value: "New resume available", html: { __html: "<u>test</u>" },
      },
      { id: 3, type: "default", value: "New data available", html: null },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={notifications}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    wrapper.instance().markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith("Notification 1 has been marked as read");
  });

  it("Notifications does not rerender when updating the props with the same list", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: {
          __html: "<strong>Urgent requirement</strong> - complete by EOD!",
        },
      },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={listNotifications}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ listNotifications, displayDrawer: true });
    expect(shouldUpdate).toBe(false);
  });

  it("Notifications does rerender when updating the props with a longer list", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: {
          __html: "<strong>Urgent requirement</strong> - complete by EOD!",
        },
      },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={listNotifications}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    const longerListNotifications = [
      ...listNotifications,
      { id: 4, type: "default", value: "Another notification" },
    ];
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({ listNotifications: longerListNotifications, displayDrawer: true });
    expect(shouldUpdate).toBe(true);
  });

  it("clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={() => {}}
      />
    );
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it("clicking on the button calls handleHideDrawer", () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    wrapper.find("button").simulate("click");
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
