import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typesReduxHooks";
import Card from "../card/Card";
import CardsList from "../list/CardsList";
import Search from "../serchAndFilter/Search";
import { getAllCountry } from "../../store/slices/countrySlice";
import { useNavigate } from "react-router-dom";
import { ICountry } from "../../types/reduxCountryTypes";

const Main = () => {
   const { countrys, loading } = useAppSelector(state => state.country);
   const { filterBy, value } = useAppSelector(state => state.seacrh);
   const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      if (!countrys.length) dispatch(getAllCountry());
      if (!loading) handleSearch();
   }, [loading]);

   useEffect(() => {
      handleSearch();
   }, [filterBy, value]);

   if (loading)
      return (
         <div className="loading">
            loading<span></span>
         </div>
      );

   const handleSearch = () => {
      let data = [...countrys];

      if (filterBy) {
         data = data.filter(c => c.region.includes(filterBy));
      }

      if (value) {
         data = data.filter(c =>
            c.name.toLowerCase().includes(value.toLowerCase()),
         );
      }

      setFilteredCountries(data);
   };

   return (
      <main>
         <Search />
         <CardsList>
            {filteredCountries?.length
               ? filteredCountries.map(ell => {
                    const countryInfo = {
                       title: ell.name,
                       img: ell.flags.png,
                       info: [
                          {
                             title: "region",
                             desc: ell.region,
                          },
                          {
                             title: "population",
                             desc: ell.population,
                          },
                          {
                             title: "capital",
                             desc: ell.capital,
                          },
                       ],
                    };
                    return (
                       <Card
                          key={ell.name}
                          {...countryInfo}
                          onClick={() => {
                             navigate(`/details/${countryInfo.title}`);
                          }}
                       />
                    );
                 })
               : []}
         </CardsList>
      </main>
   );
};

export default Main;
