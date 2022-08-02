import { IoCodeSharp } from "react-icons/io5";

const BASE_URl = "https://restcountries.com/v2/";

export const ALL_COUNTRIES =
   BASE_URl + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name: string | undefined) =>
   BASE_URl + "name/" + name;

export const filterByCode = (codes: string[] = []) =>
   BASE_URl + "alpha?codes=" + codes.join(",");
