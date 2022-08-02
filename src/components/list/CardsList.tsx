import { FC, ReactNode } from "react";
import "./cardList.scss";

const CardsList: FC<{ children: ReactNode }> = ({ children }) => {
   return <section className="cards-list">{children}</section>;
};

export default CardsList;
