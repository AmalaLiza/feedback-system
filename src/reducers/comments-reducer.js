import { ACTION_LOAD_COMMENTS_SUCCESS } from "../actions/action-constants";

const initialState = fromJS({
	comments: {},
});

export default function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_LOAD_COMMENTS_SUCCESS: {
			return {
				comments: action.payload.comments,
			};
		}

		default:
			return state;
	}
}
