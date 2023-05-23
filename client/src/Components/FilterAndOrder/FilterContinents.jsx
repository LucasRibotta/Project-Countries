/* import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {filterByContinents} from '../../redux/actions/actions'

export default function FilterContinents ({setCurrentPage}) {
    const dispatch = useDispatch();
    const [selectedContinent, setSelectedContinent] = useState("All");

    function handleFilterContinents(e) {
      const continent = e.target.value;
      setCurrentPage(1);
      setSelectedContinent(continent);
      dispatch(filterByContinents(continent));
    }

    
    return(
        <div>
        
        <select value={selectedContinent} onChange={handleFilterContinents}>
                <option  value={"All"}>All Contients</option>
                <option value={"North America"} key="North America">North America</option>
                <option value={"South America"} key="South America">South America</option>
                <option value={"Europe"} key="Europe">Europe</option>
                <option value={"Asia"} key="Asia">Asia</option>
                <option value={"Oceania"} key="Oceania">Oceania</option>
                <option value={"Africa"} key="Africa">Africa</option>
                <option value={"Antarctica"} key="Antarctica">Antarctica</option>
            </select>
        </div>
    
    )
} */

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterByContinents } from '../../redux/actions/actions';
import style from './style/Filter.module.css'

export default function FilterContinents({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContinents, setSelectedContinent] = useState([]);

  function handleFilterContinents(e) {
    const continent = e.target.value;
    setCurrentPage(1);
    setSelectedContinent(continent);
    dispatch(filterByContinents(continent));
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <div >
          <button className={style.filterName} onClick={toggleDropdown}>
            Filter Continent
          </button>
          {isOpen && (
            <div >
              <div className={style.continentList}>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="All"
                  value="All"
                  checked={selectedContinents.includes("All")}
                  onChange={handleFilterContinents}
                />
                All
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="North America"
                  value="North America"
                  checked={selectedContinents.includes("North America")}
                  onChange={handleFilterContinents}
                />
                North America
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="South America"
                  value="South America"
                  checked={selectedContinents.includes("South America")}
                  onChange={handleFilterContinents}
                />
                South America
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Europe"
                  value="Europe"
                  checked={selectedContinents.includes("Europe")}
                  onChange={handleFilterContinents}
                />
                Europe
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Asia"
                  value="Asia"
                  checked={selectedContinents.includes("Asia")}
                  onChange={handleFilterContinents}
                />
                Asia
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Oceania"
                  value="Oceania"
                  checked={selectedContinents.includes("Oceania")}
                  onChange={handleFilterContinents}
                />
                Oceania
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Africa"
                  value="Africa"
                  checked={selectedContinents.includes("Africa")}
                  onChange={handleFilterContinents}
                />
                Africa
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Antarctica"
                  value="Antarctica"
                  checked={selectedContinents.includes("Antarctica")}
                  onChange={handleFilterContinents}
                />
                Antarctica
              </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}