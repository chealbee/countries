import React from "react";
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import "./search.scss";

const Search = () => {
   const options = [
      { value: "Africa", label: "Africa" },
      { value: "America", label: "America" },
      { value: "Asia", label: "Asia" },
      { value: "Europe", label: "Europe" },
      { value: "Oceania", label: "Oceania" },
   ];
   return (
      <div className="serarch">
         <MyInput />
         <MySelect options={options} />
      </div>
   );
};

export default Search;
