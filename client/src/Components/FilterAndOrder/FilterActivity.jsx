import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySeason } from '../../Redux/actions/actions';
import style from './style/Filter.module.css';

export default function FilterActivity({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [selectSeason, setSelectSeason] = useState('');

  const handleChange = (e) => {
    const seasons = e.target.value;
    setCurrentPage(1);
    setSelectSeason(seasons);
    dispatch(filterBySeason(seasons));
  };

  return (
    <div>
      <select
        className={style.filterName}
        value={selectSeason}
        onChange={handleChange}
      >
        <option value="All">All Activity</option>
        <option value="Summer">Summer</option>
        <option value="Spring">Spring</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>
    </div>
  );
}