import React from "react";
import { shallow } from "enzyme";
import APP from "./App";
import { useSelector, useDispatch } from "react-redux";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
describe("<App />", () => {
  it("should have one header  ", () => {
    const ListItem = shallow(<APP />);
    expect(ListItem.find("Header").length).toEqual(1);
  });
  it("should have one div", () => {
    const ListItem = shallow(<APP />);
    expect(ListItem.find("div").length).toEqual(1);
  });
});
