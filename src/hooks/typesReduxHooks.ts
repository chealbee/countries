import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import type { appDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
