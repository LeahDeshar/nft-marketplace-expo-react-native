import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  dark: boolean;
};

const initialState: ThemeState = {
  dark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.dark = action.payload === "dark";
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
