import React, {useState} from "react";
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
}

/* import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterByContinents } from '../../redux/actions/actions';

export default function FilterContinents({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function handleFilterContinents(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByContinents(e.target.value));
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <label>Filter Continent</label>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Select Continent
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <label>
                <input
                  type="checkbox"
                  name="All"
                  value="All"
                  onChange={handleFilterContinents}
                />
                All
              </label>
              <label>
                <input
                  type="checkbox"
                  name="North America"
                  value={"North America"}
                  key="North America"
                  onChange={handleFilterContinents}
                />
                North America
              </label>
              <label>
                <input
                  type="checkbox"
                  name="South America"
                  value={"South America"}
                  key="South America"
                  onChange={handleFilterContinents}
                />
                South America
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Europe"
                  value={"Europe"}
                  key="Europe"
                  onChange={handleFilterContinents}
                />
                Europe
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Asia"
                  value={"Asia"}
                  key="Asia"
                  onChange={handleFilterContinents}
                />
                Asia
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Oceania"
                  value={"Oceania"}
                  key="Oceania"
                  onChange={handleFilterContinents}
                />
                Oceania
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Africa"
                  value={"Africa"}
                  key="Africa"
                  onChange={handleFilterContinents}
                />
                Africa
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Antarctica"
                  value={"Antarctica"}
                  key="Antarctica"
                  onChange={handleFilterContinents}
                />
                Antarctica
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} */
