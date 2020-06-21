import reducer from "./comments-reducer";
import {
	ACTION_LOAD_COMMENTS,
	ACTION_LOAD_COMMENTS_ERROR,
	ACTION_LOAD_COMMENTS_SUCCESS,
} from "../actions/action-constants";

const mockInitialState = [
	{
		id: 1,
		name: "Renaldo",
		email: "rsimonazzi0@wsj.com",
		rating: 2,
		commentDate: 1545500795000,
		comment:
			"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent  commodo vulputate, justo. In blandit ultscing elit.",
	},
	{
		id: 2,
		name: "Hansiain",
		email: "hharsum1@wordpress.com",
		rating: 4,
		commentDate: 1580558360000,
		comment: "In congue. Etiam justo. Etiam pretium iaculis justo.",
	},
	{
		id: 3,
		name: "Juieta",
		email: "jflatte2@cdc.gov",
		comment:
			"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
		rating: 3,
		commentDate: 1545862134000,
	},
	{
		id: 4,
		name: "Benson",
		email: "bbingley3@paypal.com",
		comment:
			"Pellentesque viverra pede ac consequat metus sapien ut  porttitor laere metus vitae ipsum. Aliquam non mauris.",
		rating: 5,
		commentDate: 1576512737000,
	},
	{
		id: 5,
		name: "Benson",
		email: "bbingley3@paypal.com",
		comment:
			"Pellentesque viverra pede ac consequat metus sapien ut  porttitor laere metus vitae ipsum. Aliquam non mauris.",
		rating: 3,
		commentDate: 1576512737000,
	},
];

describe("comments reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual(mockInitialState);
	});

	it("should handle ACTION_LOAD_COMMENTS", () => {
		expect(
			reducer([], {
				type: ACTION_LOAD_COMMENTS,
				payload: {
					id: 1,
					name: "Sheldon Cooper",
					email: "jonaskahnwald@dark.anotherworld",
					comment: "The end is the beginning, and the beginning is the end.",
					rating: 5,
				},
			})
		).toEqual([]);
	});

	it("should handle ACTION_LOAD_COMMENTS_SUCCESS", () => {
		const payload = {
			id: 1,
			name: "Sheldon Cooper",
			email: "jonaskahnwald@dark.anotherworld",
			comment: "The end is the beginning, and the beginning is the end.",
			rating: 5,
		};
		expect(
			reducer([], {
				type: ACTION_LOAD_COMMENTS_SUCCESS,
				payload,
			})
		).toEqual([payload]);
	});

	it("should handle ACTION_LOAD_COMMENTS_ERROR", () => {
		const error = {
			message: "Error",
		};
		expect(
			reducer([], {
				type: ACTION_LOAD_COMMENTS_ERROR,
				error,
			})
		).toEqual([...mockInitialState]);
	});
});
