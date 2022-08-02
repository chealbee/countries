import { FC } from "react";
import "./card.scss";

type InfoArray = { title: string; desc: string | number };
interface ICard {
   title: string;
   info: InfoArray[];
   img: string;
   onClick: () => void;
}

const Card: FC<ICard> = ({ title, info = [], img, onClick }) => {
   return (
      <div className="card" onClick={onClick}>
         <div className="img">
            <img src={img} alt="flag" />
         </div>
         <div className="card__body">
            <h3 className="card__title">{title}</h3>
            <ul className="card__list">
               {info.map(el => (
                  <li key={el.title} className="card__li">
                     {el.title}: <span>{el.desc}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Card;
