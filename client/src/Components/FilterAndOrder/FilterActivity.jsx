import React from 'react';
import { useDispatch } from 'react-redux';
import { filterBySeason } from '../../redux/actions/actions';

export default function FilterActivity({ setCurrentPage }) {
  const dispatch = useDispatch();
  const seasons = ['All', 'Spring', 'Summer', 'Autumn', 'Winter'];
  const handleChange = (e) => {
    dispatch(filterBySeason(e.target.value));
    setCurrentPage(1);
    };

  return (
    <div>
      <label htmlFor="season-select">Filter by Season:</label>
      <select id="season-select" onChange={handleChange }>
        <option value="All">All</option>
        <option value="Summer">Summer</option>
        <option value="Spring">Spring</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>
    </div>
  );
}