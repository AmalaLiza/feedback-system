import { combineReducers } from "redux";
import commentsReducer from "./comments-reducer";

export default function createReducer() {
	const appReducer = combineReducers({
		comments: commentsReducer,
	});

	return (state, action) => appReducer(state, action);
}
