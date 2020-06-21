import React from "react";
import { shallow } from "enzyme";
import Input from "./component";
import renderer from "react-test-renderer";

const props = {
	label: "label",
	handleChange: jest.fn(),
	type: "text",
	placeHolder: "Type here",
	classes: {},
};

function setup() {
	const wrapper = shallow(<Input {...props} />);
	return { wrapper, props };
}

describe("Input Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Input {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have an input", () => {
		const { wrapper } = setup();
		expect(wrapper.find("input").exists()).toBe(true);
	});

	it("should call handleChange", () => {
		const handleChange = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: "the-value" },
		};
		const component = shallow(
			<Input label="label" handleChange={handleChange} />
		);
		component.find("input").simulate("change", event);
		expect(handleChange).toBeCalledWith("the-value");
	});

	it("should call handleChange", () => {
		const handleChange = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: "the-value" },
		};
		const component = shallow(
			<Input label="label" handleChange={handleChange} />
		);
		component.find("input").simulate("focus", event);
		expect(component.state().active).toBe(true);
		component.find("input").simulate("focus", event);
		expect(component.state().active).toBe(false);
	});
});
