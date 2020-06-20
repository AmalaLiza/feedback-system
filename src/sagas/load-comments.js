import { call, put, take } from "redux-saga/effects";
import { CommentsStoreActions } from "../actions/action-creator";
import { ACTION_LOAD_COMMENTS } from "../actions/action-constants";
import JSON_DATA from "./response.json";

/**
 * Makes GET request
 * @returns {*}
 */

export function* loadComments() {
	try {
		// Service call URL should be given here.
		// const response = yield call(request, URL, { method: 'GET' });
		const response = JSON_DATA;

		if (response && response.comments.length !== 0) {
			yield put(CommentsStoreActions.loadCommentsSuccess(response.comments));
		}
	} catch (error) {
		yield put(CommentsStoreActions.loadCommentsError(error));
	}
}

/**
 * Manages watcher lifecycle
 */

export default function* loadCommentsSaga() {
	while (true) {
		const action = yield take(ACTION_LOAD_COMMENTS);
		yield call(loadComments, action);
	}
}
