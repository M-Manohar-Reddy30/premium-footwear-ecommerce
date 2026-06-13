import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",

  initialState: {
    categories: [],
  },

  reducers: {},
});

export default categorySlice.reducer;