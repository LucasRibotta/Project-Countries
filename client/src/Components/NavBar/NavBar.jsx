import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountries, getCountriesName } from "../../redux/actions/actions";
import style from "./navBar.module.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(getCountriesName(name));
    }

  function handleClick(e) {
    // To reset the country data
    console.log("clicked");
    e.preventDefault();
    dispatch(getCountries());
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
            <Link to="/" className={style.backLink}>Back</Link>
          </div>
        </div>

        <div className={style.searchContainer}>
        <form action="search-bar">
            <input 
            type="search"
            placeholder="Search..."
            onChange={handleInputChange} 
            className={style.search}
            />
            
            <button className={style.submit} type="submit" onClick={handleSubmit}>
                <span>🔍</span>
            </button>

            </form>
          <button onClick={(e) => handleClick(e)} className={style.resetButton}>
            Reset
          </button> 
        </div>

      </div>
      <div className={style.h1Container}>
        <h1>COUNTRIES API</h1>
      </div>
    </div>
  );
}