import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import countrySlice from "./slices/countrySlice";

export const store = configureStore({
   reducer: { seacrh: searchSlice, country: countrySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
