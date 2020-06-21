import React from "react";
import { shallow } from "enzyme";
import AreaGraph from "./component";
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
	areaDataKey: "count",
};

function setup() {
	const wrapper = shallow(<AreaGraph {...props} />);
	return { wrapper, props };
}

describe("AreaGraph Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<AreaGraph {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have an AreaChart", () => {
		const { wrapper } = setup();
		expect(wrapper.find("AreaChart").exists()).toBe(true);
	});
});
