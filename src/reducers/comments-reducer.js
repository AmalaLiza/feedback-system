import {
	ACTION_LOAD_COMMENTS_SUCCESS,
	ACTION_LOAD_COMMENTS_ERROR,
} from "../actions/action-constants";

/**
 * initialState for comments reducer
 * initialState is set with mock data so that on refresh of results page
 * so that there will be some comments rendered,
 */
const initialState = [
	{
		id: 1,
		name: "Renaldo",
		email: "rsimonazzi0@wsj.com",
		rating: 5,
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
		rating: 5,
		commentDate: 1545862134000,
	},
	{
		id: 4,
		name: "Benson",
		email: "bbingley3@paypal.com",
		comment:
			"Pellentesque viverra pede ac consequat metus sapien ut  porttitor laere metus vitae ipsum. Aliquam non mauris.",
		rating: 4,
		commentDate: 1576512737000,
	},
];

/**
 * commentsReducer to handle succes and error on load comments actions.
 * return default state otherwise.
 * @param state
 * @param action
 */
export default function commentsReducer(
	state = initialState,
	{ payload, type }
) {
	switch (type) {
		case ACTION_LOAD_COMMENTS_SUCCESS: {
			payload.id = state.length;
			return [payload, ...state];
		}

		case ACTION_LOAD_COMMENTS_ERROR: {
			return initialState;
		}

		default:
			return state;
	}
}
