import { CommentsStoreActions } from "./action-creator";
import * as constants from "./action-constants";

describe("actions", () => {
	it("should create an action to load comments", () => {
		const payload = {
			id: 1,
			name: "Sheldon Cooper",
			email: "jonaskahnwald@dark.anotherworld",
			comment: "The end is the beginning, and the beginning is the end.",
			rating: 5,
		};
		const expectedAction = {
			type: constants.ACTION_LOAD_COMMENTS,
			payload,
		};
		expect(CommentsStoreActions.loadComments(payload)).toEqual(expectedAction);
	});

	it("should create an action to set state in reducer on redux-saga success", () => {
		const payload = {
			id: 1,
			name: "Sheldon Cooper",
			email: "jonaskahnwald@dark.anotherworld",
			comment: "The end is the beginning, and the beginning is the end.",
			rating: 5,
		};
		const expectedAction = {
			type: constants.ACTION_LOAD_COMMENTS_SUCCESS,
			payload,
		};
		expect(CommentsStoreActions.loadCommentsSuccess(payload)).toEqual(
			expectedAction
		);
	});

	it("should create an action to set state as error in reducer on redux-saga error", () => {
		const error = new Error();
		const expectedAction = {
			type: constants.ACTION_LOAD_COMMENTS_ERROR,
			error,
		};
		expect(CommentsStoreActions.loadCommentsError(error)).toEqual(
			expectedAction
		);
	});
});
