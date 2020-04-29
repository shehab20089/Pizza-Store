import React from "react";
import { shallow } from "enzyme";
import AddProduct from "./index";
import { useSelector, useDispatch } from "react-redux";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
describe("<AddProduct />", () => {
  it("should have no header  ", () => {
    const ListItem = shallow(<AddProduct />);
    expect(ListItem.find("Header").length).toEqual(0);
  });
  it("should have one div or more", () => {
    const ListItem = shallow(<AddProduct />);
    expect(ListItem.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
