import React from "react";
import { shallow } from "enzyme";
import Title from "./component";
import renderer from "react-test-renderer";

const props = {
	title: "Some random title",
};

function setup() {
	const wrapper = shallow(<Title {...props} />);
	return { wrapper, props };
}

describe("Title Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Title {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have a h1 element", () => {
		const { wrapper } = setup();
		expect(wrapper.find("h1").exists()).toBe(true);
	});
});
