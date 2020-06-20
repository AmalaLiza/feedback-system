import { combineReducers } from "redux";
import commentsReducer from "./comments-reducer";

/**
 * createReducer to combine all reducers and create app reducer
 */
export default function createReducer() {
	const appReducer = combineReducers({
		comments: commentsReducer,
	});

	return (state, action) => appReducer(state, action);
}
