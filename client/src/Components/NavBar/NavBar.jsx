import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./navBar.module.css";

export default function NavBar() {
  const location = useLocation();
  const allowedRoutes = ["/home", "/about"];

  // Verificar si la ruta actual está permitida
  const isAllowedRoute = allowedRoutes.includes(location.pathname) || location.pathname.startsWith("/detail/");

  if (!isAllowedRoute) {
    return null; // No renderizar el NavBar cuando la ruta no está permitida
  }


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
            <Link to="/about">About</Link>
            <Link to="/create">Create an Activity</Link>
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