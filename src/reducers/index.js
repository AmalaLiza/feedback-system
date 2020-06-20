import { combineReducers } from "redux";
import commentsReducer from "./comments-reducer";

export default function createReducer(asyncReducers) {
	const appReducer = combineReducers({
		comments: commentsReducer,

		// write synchronous reducers above this line
		...asyncReducers,
	});

	return (state, action) => appReducer(state, action);
}
