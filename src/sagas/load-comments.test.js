import { all, put, takeLatest } from "redux-saga/effects";
import loadCommentsSaga, { loadComments } from "./load-comments";
import { ACTION_LOAD_COMMENTS } from "../actions/action-constants";
import { CommentsStoreActions } from "../actions/action-creator";

describe("comments reducer", () => {
	const gen = loadCommentsSaga();

	it("saga should call loadComments", () => {
		expect(gen.next().value).toEqual(
			all([takeLatest(ACTION_LOAD_COMMENTS, loadComments)])
		);
	});

	it("saga should dispatch action", () => {
		const action = {
			payload: {
				name: "Heisenberg",
				email: "wecook@gamil.com",
				comment: "Say my name!",
                rating: 5,
                commentDate: 1592746957506
			},
		};
		const gen = loadComments(action);

		expect(gen.next().value).toEqual(
			put(
				CommentsStoreActions.loadCommentsSuccess({
					name: action.payload.name,
					email: action.payload.email,
					comment: action.payload.comment,
					rating: action.payload.rating,
					commentDate: action.payload.commentDate,
				})
			)
		);
	});
});
