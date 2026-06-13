import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  clerkId: string;
  fullName: string;
  email: string;

  profileCompleted: boolean;
}

const initialState: UserState = {
  clerkId: "",
  fullName: "",
  email: "",

  profileCompleted: false,
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    setUser: (
      state,
      action
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    clearUser: () =>
      initialState,
  },
});

export const {
  setUser,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;