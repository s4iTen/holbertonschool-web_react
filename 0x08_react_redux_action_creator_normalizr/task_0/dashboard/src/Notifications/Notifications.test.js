import React from "react";
import { shallow } from "enzyme";
import { Notifications } from "./Notifications";
import NotificationItem from "./NotificationItem";

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

describe("<Notifications />", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });


  it("renders the right number of NotificationItem when listNotifications is passed", () => {
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
        markNotificationAsRead={() => {}}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
  });

  it("does not display 'Here is the list of notifications' when listNotifications is empty", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        markNotificationAsRead={() => {}}
      />
    );
    expect(wrapper.text()).not.toContain("Here is the list of notifications");
  });

  it("displays 'No new notification for now' when listNotifications is empty", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        markNotificationAsRead={() => {}}
      />
    );
    expect(wrapper.text()).toContain("No new notification for now");
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
