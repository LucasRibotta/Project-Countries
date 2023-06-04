import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterByContinents } from '../../Redux/actions/actions';
import style from './style/Filter.module.css'

export default function FilterContinents({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState('');

  function handleFilterContinents(e) {
    const continent = e.target.value;
    setCurrentPage(1);
    setSelectedContinent(continent);
    dispatch(filterByContinents(continent));
  }

  return (
    <div>
      <select
        className={style.filterName}
        value={selectedContinent}
        onChange={handleFilterContinents}
      >
        <option value="">Filter Continent</option>
        <option value="All">All</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </div>
  );
}