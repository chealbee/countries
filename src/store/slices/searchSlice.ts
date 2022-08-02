import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearch {
   value: string;
   filterBy: string | undefined;
}
const initialState: ISearch = { value: "", filterBy: "" };

export const searchSlice = createSlice({
   name: "search",
   initialState,
   reducers: {
      setInputValue: (state: ISearch, action: PayloadAction<string>) => {
         state.value = action.payload;
      },
      setFilter: (
         state: ISearch,
         action: PayloadAction<string | undefined>,
      ) => {
         state.filterBy = action.payload;
      },
   },
});

export const { setInputValue, setFilter } = searchSlice.actions;
export default searchSlice.reducer;
