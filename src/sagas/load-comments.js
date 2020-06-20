import { all, put, takeLatest } from "redux-saga/effects";
import { CommentsStoreActions } from "../actions/action-creator";
import { ACTION_LOAD_COMMENTS } from "../actions/action-constants";
import JSON_DATA from "./response.json";

/**
 * Makes GET request
 */

export function* loadComments(action) {
	try {
		const { payload } = action;
		// Service call URL should be given here.
		// const response = yield call(request, URL, { method: 'GET' });
		const response = JSON_DATA;

		if (response && response.comments.length !== 0) {
			yield put(
				CommentsStoreActions.loadCommentsSuccess([
					payload,
					...response.comments,
				])
			);
		}
	} catch (error) {
		yield put(CommentsStoreActions.loadCommentsError(error));
	}
}

export default function* loadCommentsSaga() {
	yield all([takeLatest(ACTION_LOAD_COMMENTS, loadComments)]);
}
