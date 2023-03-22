import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfTask: 10,
};

const todoSlice = createSlice({
  name: "",
  initialState,
  reducers: {
    task: (state) => {
      state.numOfTask--;
    },
    addTask: (state, action) => {
      state.numOfTask += action.payload;
    },
  },
});

module.exports = todoSlice.reducer;
module.exports.todoActions = todoSlice.actions;
