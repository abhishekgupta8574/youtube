import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  
  initialState: { 
    isMenuOpen: false,
    categoryId:0
    
    
  },
  reducers:{
    toggle:(state)=>{
        state.isMenuOpen=(!state.isMenuOpen)
    },
    closeSidebar:(state)=>{
      state.isMenuOpen=false;
      
    },
    setCategoryId:(state,action)=>{
      state.categoryId=action.payload;
    }

  }
});

export const {toggle,closeSidebar,setCategoryId} =menuSlice.actions;
export default menuSlice.reducer;
