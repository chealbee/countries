import { useEffect, useState } from "react";
import "./header.scss";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import Container from "../container/Container";
import { Link } from "react-router-dom";

const Header = () => {
   const [theme, setTheme] = useState("light");

   const togleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };

   useEffect(() => {
      document.body.setAttribute("data-theme", theme);
   }, [theme]);
   return (
      <header className="header">
         <Container>
            <div className="header__wraper">
               <Link to="/" className="header__logo">
                  Where in the world?
               </Link>
               <div className="header__switcher" onClick={togleTheme}>
                  {theme == "light" ? <IoMoonOutline /> : <IoMoon />}
                  <span>{theme} mode</span>
               </div>
            </div>
         </Container>
      </header>
   );
};

export default Header;
