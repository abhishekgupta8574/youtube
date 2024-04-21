import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",

  initialState: {
    isMenuOpen: false,
    categoryId: 0,
    title: "",
    hiemburger: true,
  },
  reducers: {
    toggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeSidebar: (state) => {
      state.isMenuOpen = false;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    addTitle: (state, action) => {
      state.title = action.payload;
    },

    toggleHiemburger: (state,action) => {
      state.hiemburger = action.payload;
    },
  },
});

export const { toggle, closeSidebar, setCategoryId, addTitle,toggleHiemburger } =
  menuSlice.actions;
export default menuSlice.reducer;
