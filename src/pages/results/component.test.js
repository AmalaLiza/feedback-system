import React from "react";
import { shallow } from "enzyme";
import { Results } from "./component";
import renderer from "react-test-renderer";
import BarGraph from "../../components/bar-graph/component";
import AreaGraph from "../../components/area-graph/component";
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

	it("Should have an 1 Area Chart and 1 Bar Chart", () => {
		const { wrapper } = setup();
		expect(wrapper.find(BarGraph).exists()).toBe(true);
		expect(wrapper.find(BarGraph).length).toBe(1);
		expect(wrapper.find(AreaGraph).exists()).toBe(true);
		expect(wrapper.find(AreaGraph).length).toBe(1);
	});

	it("Should have an CommentBox length same as length of prop comments", () => {
		const { wrapper } = setup();
		expect(wrapper.find(CommentBox).exists()).toBe(true);
		expect(wrapper.find(CommentBox).length).toBe(props.comments.length);
	});
});
