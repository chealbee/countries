import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./details.scss";
import axios from "axios";
import { filterByCode, searchByCountry } from "../../config";

interface IDetailsCountry {
   name: string;
   flags: {
      svg: string;
      png: string;
   };
   capital: string;
   nativeName: string;
   population: number;
   region: string;
   subregion: string;
   currencies: [{ name: string }];
   languages: [{ name: string }];
   borders: string[];
}

const Details = () => {
   const { country } = useParams();
   const navigate = useNavigate();
   const [countrys, setCountrys] = useState<IDetailsCountry>();
   const [borders, setBorders] = useState<string[]>();

   useEffect(() => {
      axios
         .get<IDetailsCountry[]>(searchByCountry(country))
         .then(({ data }) => {
            setCountrys(data[0]);
         });
   }, [country]);
   useEffect(() => {
      if (countrys) {
         axios
            .get<{ name: string }[]>(filterByCode(countrys?.borders))
            .then(({ data }) => setBorders(data.map(c => c.name)));
      }
   }, [countrys?.borders]);

   return (
      <>
         <div className="back" onClick={() => navigate(-1)}>
            <IoArrowBack /> back
         </div>
         <div className="details__content">
            <img src={countrys?.flags.png} className="details__flag" />
            <div className="details__info">
               <h3 className="details__name">{countrys?.name}</h3>
               <div className="details__lists">
                  <ul className="details__list">
                     <li>
                        <span>Native Name:</span> {countrys?.nativeName}
                     </li>
                     <li>
                        <span>Population:</span> {countrys?.population}
                     </li>
                     <li>
                        <span>Region:</span> {countrys?.region}
                     </li>
                     <li>
                        <span>Sub Region:</span> {countrys?.subregion}
                     </li>
                     <li>
                        <span>Capital:</span> {countrys?.capital}
                     </li>
                  </ul>
                  <ul className="details__list">
                     <li>
                        <span>Top Level Domains:</span> {countrys?.capital}
                     </li>
                     <li>
                        <span>Currencies:</span> {countrys?.currencies[0].name}
                     </li>
                     <li>
                        <span> Languages:</span>
                        {countrys?.languages.map(ell => ell.name).join(",")}
                     </li>
                  </ul>
               </div>
               <div className="details__bordered">
                  <p>Border Countries:</p>
                  {borders?.map((ell: string) => (
                     <span
                        onClick={() => navigate(`/details/${ell}`)}
                        key={ell}
                     >
                        {ell}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Details;
