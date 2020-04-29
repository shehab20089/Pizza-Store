import React from "react";
import { shallow } from "enzyme";
import Register from "./index";
import { useSelector, useDispatch } from "react-redux";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
describe("<Register />", () => {
  it("should have no header  ", () => {
    const ListItem = shallow(<Register />);
    expect(ListItem.find("Header").length).toEqual(0);
  });
  it("should have one div or more", () => {
    const ListItem = shallow(<Register />);
    expect(ListItem.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should have 2 inputs", () => {
    const ListItem = shallow(<Register />);
    expect(ListItem.find("input").length).toEqual(5);
  });
});
