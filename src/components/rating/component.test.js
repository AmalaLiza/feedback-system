import React from "react";
import { shallow } from "enzyme";
import Rating from "./component";
import renderer from "react-test-renderer";

const props = {
	buttonText: "Button title",
	onRatingClick: (noop) => noop,
	className: "star",
	initialRating: 0,
	label: "Overall rating",
};

function setup() {
	const wrapper = shallow(<Rating {...props} />);
	return { wrapper, props };
}

describe("Rating Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Rating {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have a label and a Rating component", () => {
		const { wrapper } = setup();
		expect(wrapper.find("label").exists()).toBe(true);
	});
});
