import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    result: {},
  },
  reducers: {
    pickSearchResult: (state, action) => {
      state.result = { ...state.result, ...action.payload };
    },
  },
});

export const {pickSearchResult}=searchSlice.actions;
export default searchSlice.reducer;