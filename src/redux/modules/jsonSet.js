import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = {
  data: [],
  selectMember: "카리나",
};

const jsonSetSlice = createSlice({
  name: "jsonSet",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteData: (state, action) => {
      state.data = action.payload;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
    selectMember: (state, action) => {
      state.selectMember = action.payload;
    },
  },
});

export const { setData, addData, deleteData, updateData, selectMember } =
  jsonSetSlice.actions;
export default jsonSetSlice.reducer;
