import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Fav anime character",
    content: "fav anime character is itachi",
  },
  {
    id: 2,
    title: "fav marvel movie",
    content: "fav marvel movie is Avengers",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        //prepare is callback, gets raw data from component and strcutures it as per state and then passes to reducer with this our components don't need to know state structure and just pass in raw data for actions
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
