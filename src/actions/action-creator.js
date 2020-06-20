import {
	ACTION_LOAD_COMMENTS,
	ACTION_LOAD_COMMENTS_SUCCESS,
	ACTION_LOAD_COMMENTS_ERROR,
} from "./action-constants";

export const CommentsStoreActions = {
	loadComments: ({ name, email, comment }) => ({
		type: ACTION_LOAD_COMMENTS,
		name,
		email,
		comment,
	}),
	loadCommentsSuccess: ({ name, email, comment }) => ({
		type: ACTION_LOAD_COMMENTS,
		name,
		email,
		comment,
	}),
	loadCommentsError: (error) => ({
		type: ACTION_LOAD_COMMENTS_ERROR,
		error,
	}),
};
