import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

// const initialState = [
//   {
//     id: 1,
//     title: "Fav anime character",
//     content: "fav anime character is itachi",
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: {
//       like: 10,
//       angry: 0,
//       love: 5,
//     },
//   },
//   {
//     id: 2,
//     title: "fav marvel movie",
//     content: "fav marvel movie is Avengers",
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: {
//       like: 4,
//       angry: 3,
//       love: 19,
//     },
//   },
// ];
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Fav anime character",
      content: "fav anime character is itachi",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        like: 10,
        angry: 0,
        love: 5,
      },
    },
    {
      id: 2,
      title: "fav marvel movie",
      content: "fav marvel movie is Avengers",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        like: 4,
        angry: 3,
        love: 19,
      },
    },
  ],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (title, content, userId) => {
        //prepare is callback, gets raw data from component and strcutures it as per state and then passes to reducer with this our components don't need to know state structure and just pass in raw data for actions
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              like: 0,
              angry: 0,
              love: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    },
    editPost: (state, action) => {
      const { postId, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id == postId);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export const { addPost, reactionAdded, editPost } = postsSlice.actions;

export default postsSlice.reducer;
