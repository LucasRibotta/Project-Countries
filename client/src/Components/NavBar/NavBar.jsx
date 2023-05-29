import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./navBar.module.css";

export default function NavBar() {
  const location = useLocation();
  const [clicked, setClicked] = useState(false)

  const allowedRoutes = ["/home", "/about", "/game", '/create'];

  // Verificar si la ruta actual está permitida
  const isAllowedRoute = allowedRoutes.includes(location.pathname) || location.pathname.startsWith("/detail/");
  if (!isAllowedRoute) {
    return null; // No renderizar el NavBar cuando la ruta no está permitida
  }

  const handleClick = () => {
    setClicked(!clicked)
  }

  const btnHome = location.pathname === '/home';
  const btnAbout = location.pathname === '/about';
  const btnGame = location.pathname === '/game';
  const btnCreate = location.pathname === '/create';

  return (
    <div className={style.container}>
      <div className={style.menuContainer}>
        <div className={style.hamburgerMenu}>
          
          <input type="checkbox" className={style.checkbox} id="menu-toggle" />
          <label className={style.hamburger} htmlFor="menu-toggle">
            <span></span>
            <span></span>
            <span></span>

          </label>

          <div className={style.menu}>
          {!btnHome && <a onClick={handleClick} href="/home">Home</a>}
          {!btnAbout && <a onClick={handleClick} href="/about">About</a>}
          {!btnGame && <a onClick={handleClick} href="/game">Game</a>}
          {!btnCreate && <a onClick={handleClick} href="/create">Create an Activity</a>}
            <Link to="/" className={style.backLink}>
              &#x261A; Exit
            </Link>
          </div>
        </div>


      </div>
      
   <div className={style.h1Container}>
        <h1>COUNTRIES API</h1>
      </div> 

    </div>
  );
}