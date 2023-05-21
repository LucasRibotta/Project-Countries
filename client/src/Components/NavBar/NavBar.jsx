import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/actions";
import SearchBar from "../Searchbar/Search";
import style from "./navBar.module.css";

export default function NavBar() {
  const dispatch = useDispatch();

  function handleClick(e) {
    // To reset the country data
    console.log("clicked");
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div className={style.container}>
      <h1>COUNTRIES API</h1>
      <div className={style.menuContainer}>
        <div>
          <Link to="/">Back</Link>
        </div>
        <div className={style.searchContainer}>
          <SearchBar />
          <button onClick={(e) => handleClick(e)} className={style.resetButton}>
            Reset
          </button>
        </div>
        <div className={style.hamburgerMenu}>
          <input type="checkbox" className={style.checkbox} />
          <span></span>
          <span></span>
          <span></span>
          <div className={style.menu}>
            <Link to="/home">HOME</Link>
            <Link to="/create">Create an Activity</Link>
          </div>
        </div>
      </div>
    </div>
  );
}