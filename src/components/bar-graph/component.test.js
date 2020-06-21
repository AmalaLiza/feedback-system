import React from "react";
import { shallow } from "enzyme";
import BarGraph from "./component";
import renderer from "react-test-renderer";

const props = {
	chartData: [
		{
			rating: 5,
			count: 2,
		},
		{ rating: 5, count: 2 },
	],
	xAxisDataKey: "rating",
	barDataKey: "count",
};

function setup() {
	const wrapper = shallow(<BarGraph {...props} />);
	return { wrapper, props };
}

describe("BarGraph Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<BarGraph {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have an BarChart", () => {
		const { wrapper } = setup();
		expect(wrapper.find("BarChart").exists()).toBe(true);
	});
});
