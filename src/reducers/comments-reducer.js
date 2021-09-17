import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: [
    {
      id: 1,
      name: "Renaldo",
      email: "rsimonazzi0@wsj.com",
      rating: 2,
      commentDate: 1545500795000,
      comment:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent  commodo vulputate, justo. In blandit ultscing elit.",
    },
    {
      id: 2,
      name: "Hansiain",
      email: "hharsum1@wordpress.com",
      rating: 4,
      commentDate: 1580558360000,
      comment: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    },
    {
      id: 3,
      name: "Juieta",
      email: "jflatte2@cdc.gov",
      comment:
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
      rating: 3,
      commentDate: 1545862134000,
    },
    {
      id: 4,
      name: "Benson",
      email: "bbingley3@paypal.com",
      comment:
        "Pellentesque viverra pede ac consequat metus sapien ut  porttitor laere metus vitae ipsum. Aliquam non mauris.",
      rating: 5,
      commentDate: 1576512737000,
    },
    {
      id: 5,
      name: "Benson",
      email: "bbingley3@paypal.com",
      comment:
        "Pellentesque viverra pede ac consequat metus sapien ut  porttitor laere metus vitae ipsum. Aliquam non mauris.",
      rating: 3,
      commentDate: 1576512737000,
    },
  ],
  reducers: {
    loadComments: (state, action) => {
      action.payload.id = state.length + 1;
      return [action.payload, ...state];
    },
    loadCommentsError: () => initialState,
  },
});

export const selectComments = (state) => state.comments;

export const { loadComments, loadCommentsError } = commentsSlice.actions;

export default commentsSlice.reducer;
