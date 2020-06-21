import React from "react";
import { shallow } from "enzyme";
import { Results } from "./component";
import renderer from "react-test-renderer";
import Chart from "../../components/chart/component";
import CommentBox from "../../components/comment-box/component";

const props = {
	comments: [
		{
			id: 1,
			name: "Sheldon Cooper",
			email: "jonaskahnwald@dark.anotherworld",
			comment: "The end is the beginning, and the beginning is the end.",
			rating: 5,
		},
		{
			id: 2,
			name: "Sheldon Cooper",
			email: "jonaskahnwald@dark.anotherworld",
			comment: "The end is the beginning, and the beginning is the end.",
			rating: 4,
		},
	],
};

function setup() {
	const wrapper = shallow(<Results {...props} />);
	return { wrapper, props };
}

describe("Results Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Results {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have an 2 Area Charts", () => {
		const { wrapper } = setup();
		expect(wrapper.find(Chart).exists()).toBe(true);
		expect(wrapper.find(Chart).length).toBe(2);
	});

	it("Should have an CommentBox length same as length of prop comments", () => {
		const { wrapper } = setup();
		expect(wrapper.find(CommentBox).exists()).toBe(true);
		expect(wrapper.find(CommentBox).length).toBe(props.comments.length);
	});
});
