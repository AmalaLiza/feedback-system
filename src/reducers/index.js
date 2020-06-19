import { combineReducers } from "redux";

export default function createReducer(asyncReducers) {
	const appReducer = combineReducers({
		// write synchronous reducers above this line
		...asyncReducers,
	});

	return (state, action) => appReducer(state, action);
}
