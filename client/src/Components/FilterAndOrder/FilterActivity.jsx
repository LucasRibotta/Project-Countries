import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByActivity } from '../../redux/actions/actions';

export default function FilterActivity({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [season, setSeason] = useState('All');

  const handleSeasonChange = (e) => {
    const selectedSeason = e.target.value;
    setSeason(selectedSeason);
    dispatch(filterByActivity({ season: selectedSeason }));
  };

  return (
    <div>
      <select value={season} onChange={handleSeasonChange}>
        <option value="All">All Seasons</option>
        <option value="Summer">Summer</option>
        <option value="Spring">Spring</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>
    </div>
  );
}