import React from "react";
import { IoSearch } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../hooks/typesReduxHooks";
import "./myInput.scss";
import { setInputValue } from "../../store/slices/searchSlice";

const MyInput = () => {
   const value = useAppSelector(state => state.seacrh.value);
   const diapatch = useAppDispatch();
   return (
      <div className="input__wraper">
         <IoSearch />
         <input
            className="input"
            placeholder="Search for a country..."
            value={value}
            onChange={e => diapatch(setInputValue(e.target.value))}
         />
      </div>
   );
};

export default MyInput;
