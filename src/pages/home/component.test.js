import React from "react";
import { shallow, mount } from "enzyme";
import { Home, HomeButton } from "./component";
import renderer from "react-test-renderer";
import Input from "../../components/input/component";
import StarRating from "../../components/rating/component";
import Button from "../../components/button/component";
import Title from "../../components/title/component";

const props = {
	onSubmitForm: jest.fn(),
};

function setup() {
	const wrapper = shallow(<Home {...props} />);
	return { wrapper, props };
}

describe("Home Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Home {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Should have an 3 inputs", () => {
		const { wrapper } = setup();
		expect(wrapper.find(Title).exists()).toBe(true);
		expect(wrapper.find(Title).length).toBe(1);
	});

	it("Should have an 3 inputs", () => {
		const { wrapper } = setup();
		expect(wrapper.find(Input).exists()).toBe(true);
		expect(wrapper.find(Input).length).toBe(3);
	});

	it("Should have an 3 inputs", () => {
		const { wrapper } = setup();
		expect(wrapper.find(StarRating).exists()).toBe(true);
		expect(wrapper.find(StarRating).length).toBe(1);
	});

	it("Should have an 3 inputs", () => {
		const { wrapper } = setup();
		expect(wrapper.find(HomeButton).exists()).toBe(true);
		expect(wrapper.find(HomeButton).length).toBe(1);
	});

	it("should call onSubmitForms", () => {
		const onSubmitForm = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: "the-value" },
		};
		const component = shallow(<HomeButton onSubmitForm={onSubmitForm} />);
		component.find(Button).simulate("click", event);
		expect(onSubmitForm).toBeCalled();
	});

	it("should set error object as true on call of validateForm with no value", () => {
		const onSubmitForm = jest.fn();
		const homeComponent = shallow(<Home onSubmitForm={onSubmitForm} />);
		homeComponent.instance().validateForm();
		expect(homeComponent.state().error).toEqual({
			name: true,
			email: true,
			comment: true,
		});
	});

	it("should set FormValues", () => {
		const onSubmitForm = jest.fn();
		const mockComment = {
			name: "Tyrion",
			email: "tyrionlannister@gmail.com",
			comment: "a lannister pays his debts.",
			id: 2,
			rating: 5,
		};
		const homeComponent = shallow(<Home onSubmitForm={onSubmitForm} />);
		homeComponent.instance().setFormValues(mockComment);
		expect(homeComponent.state().name).toEqual(mockComment.name);
		expect(homeComponent.state().email).toEqual(mockComment.email);
		expect(homeComponent.state().comment).toEqual(mockComment.comment);
	});
});
