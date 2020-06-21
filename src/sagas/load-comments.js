import { all, put, takeLatest } from "redux-saga/effects";
import { CommentsStoreActions } from "../actions/action-creator";
import { ACTION_LOAD_COMMENTS } from "../actions/action-constants";

/**
 * Makes GET request
 */

export function* loadComments(action) {
	try {
		const { payload } = action;
		// Service call URL should be given here, in case data is being requested through API.
		// const response = yield call(request, URL, { method: 'GET' });
		yield put(
			CommentsStoreActions.loadCommentsSuccess({
				name: payload.name,
				email: payload.email,
				comment: payload.comment,
				rating: payload.rating,
				commentDate: payload.commentDate || new Date().getTime(),
			})
		);
	} catch (error) {
		/**
		 * Error action to be performed in case of error from API request.
		 * But no API requeest in current scenario
		 */
		yield put(CommentsStoreActions.loadCommentsError(error));
	}
}

export default function* loadCommentsSaga() {
	yield all([takeLatest(ACTION_LOAD_COMMENTS, loadComments)]);
}
