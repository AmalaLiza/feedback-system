import React from "react";
import { shallow } from "enzyme";
import CommentBox from "./component";
import renderer from "react-test-renderer";

const props = {
	comment: {
		id: 1,
		name: "Sheldon Cooper",
		email: "jonaskahnwald@dark.anotherworld",
		comment: "The end is the beginning, and the beginning is the end.",
		rating: 5,
	},
};

function setup() {
	const wrapper = shallow(<CommentBox {...props} />);
	return { wrapper, props };
}

describe("CommentBox Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<CommentBox {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have an li", () => {
		const { wrapper } = setup();
		expect(wrapper.find("li").exists()).toBe(true);
	});
});
