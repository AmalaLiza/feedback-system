import {
	ACTION_LOAD_COMMENTS,
	ACTION_LOAD_COMMENTS_SUCCESS,
	ACTION_LOAD_COMMENTS_ERROR,
} from "./action-constants";

export const CommentsStoreActions = {
	loadComments: (payload) => ({
		type: ACTION_LOAD_COMMENTS,
		payload,
	}),
	loadCommentsSuccess: (payload) => ({
		type: ACTION_LOAD_COMMENTS_SUCCESS,
		payload,
	}),
	loadCommentsError: (error) => ({
		type: ACTION_LOAD_COMMENTS_ERROR,
		error,
	}),
};
