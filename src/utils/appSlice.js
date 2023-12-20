import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isMenuOpen: true, data: null },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    searchData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, searchData } = appSlice.actions;
export default appSlice.reducer;
