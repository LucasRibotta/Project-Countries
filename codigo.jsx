import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import styles from './navBar.modules.css'

function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <div className={styles.navigation}>
      <div className={styles.contimg}></div>
      <ul>
        <li>
        <SearchBar />
        </li>
        {isHomePage && (
          <li>
            <Link to="/home">Home</Link>
          </li>
        )}
        
      </ul>
    </div>
  );
};

export default NavBar;