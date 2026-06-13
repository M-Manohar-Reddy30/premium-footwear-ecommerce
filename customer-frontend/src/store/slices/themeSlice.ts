import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark";
}

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",

  initialState,

  reducers: {
    setTheme: (
      state,
      action
    ) => {
      state.mode = action.payload;
    },
  },
});

export const {
  setTheme,
} = themeSlice.actions;

export default themeSlice.reducer;