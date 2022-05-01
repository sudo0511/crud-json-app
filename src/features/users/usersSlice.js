import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Sudhanshu" },
  { id: 2, name: "Jake" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
