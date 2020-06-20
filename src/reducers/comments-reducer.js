import {
	ACTION_LOAD_COMMENTS_SUCCESS,
	ACTION_LOAD_COMMENTS_ERROR,
} from "../actions/action-constants";

const initialState = [
	{
		id: 1,
		name: "Renaldo",
		email: "rsimonazzi0@wsj.com",
		rating: 5,
		comment_date: 1545500795000,
		comment:
			"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
	},
	{
		id: 2,
		name: "Hansiain",
		email: "hharsum1@wordpress.com",
		rating: 4,
		comment_date: 1580558360000,
		comment: "In congue. Etiam justo. Etiam pretium iaculis justo.",
	},
	{
		id: 3,
		name: "Juieta",
		email: "jflatte2@cdc.gov",
		comment:
			"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
		rating: 5,
		comment_date: 1545862134000,
	},
	{
		id: 4,
		name: "Benson",
		email: "bbingley3@paypal.com",
		comment:
			"Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
		rating: 4,
		comment_date: 1576512737000,
	},
];

export default function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_LOAD_COMMENTS_SUCCESS: {
			return action.payload;
		}

		case ACTION_LOAD_COMMENTS_ERROR: {
			return initialState;
		}

		default:
			return state;
	}
}
