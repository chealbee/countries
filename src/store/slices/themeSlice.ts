import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
   theme: string;
}
const initialState: ITheme = { theme: "light" };

export const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      togleTheme: (state: any) => {
         state.theme === "light"
            ? (state.theme = "dark")
            : (state.theme = "light");
      },
   },
});
