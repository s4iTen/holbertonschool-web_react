jest.mock("aphrodite", () => ({
  StyleSheet: {
    create: jest.fn().mockImplementation(() => ({
      header: "header",
      img: "img",
    })),
  },
  css: jest.fn().mockImplementation(() => "className"),
  StyleSheetTestUtils: {
    suppressStyleInjection: jest.fn(),
  },
}));

import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("renders without crashing", () => {
    expect(wrapper).not.toBeNull();
  });

  it("renders an img tag", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("renders an h1 tag", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
