import React from "react";
import { shallow } from "enzyme";
import Button from "./component";
import renderer from "react-test-renderer";

const props = {
	buttonText: "Button title",
	onClick: jest.fn(),
};

function setup() {
	const wrapper = shallow(<Button {...props} />);
	return { wrapper, props };
}

describe("Button Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Button {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have a button", () => {
		const { wrapper } = setup();
		expect(wrapper.find("button").exists()).toBe(true);
	});

	it("should call onClick", () => {
		const onClick = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: "the-value" },
		};
		const component = shallow(<Button buttonText="label" onClick={onClick} />);
		component.find("button").simulate("click", event);
		expect(onClick).toBeCalledWith(event);
	});
});
