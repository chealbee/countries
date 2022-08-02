import Select from "react-select";
import { useAppDispatch } from "../../hooks/typesReduxHooks";
import "./select.scss";
import { setFilter } from "../../store/slices/searchSlice";
import { FC } from "react";

interface IOptin {
   options: {
      value: string;
      label: string;
   }[];
}

const MySelect: FC<IOptin> = ({ options }) => {
   const dispatch = useAppDispatch();
   return (
      <Select
         options={options}
         placeholder="Filter by region"
         classNamePrefix="select"
         isSearchable={false}
         onChange={el => {
            dispatch(setFilter(el?.value));
         }}
      />
   );
};

export default MySelect;
