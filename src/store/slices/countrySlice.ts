import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_COUNTRIES } from "../../config";
import { ICountry } from "../../types/reduxCountryTypes";

export interface ICountrys {
   countrys: ICountry[];
   loading: boolean;
}
const initialState: ICountrys = { countrys: [], loading: false };

export const getAllCountry = createAsyncThunk(
   "country/getAllCountry",
   async () => {
      const res = await axios.get<ICountry[]>(ALL_COUNTRIES);
      return res.data;
   },
);

export const countrySlice = createSlice({
   name: "country",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getAllCountry.pending, state => {
            state.loading = true;
         })
         .addCase(getAllCountry.fulfilled, (state, action) => {
            state.countrys = action.payload;
            state.loading = false;
         });
   },
});

export const {} = countrySlice.actions;
export default countrySlice.reducer;
