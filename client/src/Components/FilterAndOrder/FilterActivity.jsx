import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySeason } from '../../Redux/actions/actions';
import style from './style/Filter.module.css';

export default function FilterActivity({ setCurrentPage, handleFilterSeason }) {
  const dispatch = useDispatch();
  const selectedContinent = useSelector((state) => state.allContinents);
  const [isOpen, setIsOpen] = useState(false);
  const [selectSeason, setSelectSeason] = useState([]);

  const continentsSeasons = {
    "North America": ["Summer", "Spring", "Autumn", "Winter"],
    "South America": ["Summer", "Spring", "Autumn", "Winter"],
    "Europe": ["Summer", "Spring", "Autumn", "Winter"],
    "Asia": ["Summer", "Spring", "Autumn", "Winter"],
    "Oceania": ["Summer", "Spring", "Autumn", "Winter"],
    "Africa": ["Summer", "Spring", "Autumn", "Winter"],
    "Antarctica": ["Summer", "Spring", "Autumn", "Winter"],
  };

  const handleChange = (e) => {
    const selectedSeason = e.target.value;
    setCurrentPage(1);

    let updatedSeasons = [...selectSeason];

    if (selectedSeason === 'All') {
      if (selectSeason.length === continentsSeasons[selectedContinent]?.length) {
        updatedSeasons = [];
      } else {
        updatedSeasons = [...continentsSeasons[selectedContinent]];
      }
    } else {
      if (updatedSeasons.includes(selectedSeason)) {
        updatedSeasons = updatedSeasons.filter((season) => season !== selectedSeason);
      } else {
        updatedSeasons.push(selectedSeason);
      }
    }

    setSelectSeason(updatedSeasons);
    dispatch(filterBySeason(updatedSeasons));
    handleFilterSeason(updatedSeasons);
  };

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <button className={style.filterName} onClick={toggleDropdown}>
          Filter Season
        </button>
        {isOpen && (
          <div>
            <div className={style.filterList}>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="All"
                  value="All"
                  checked={selectSeason.length === continentsSeasons[selectedContinent]?.length}
                  onChange={handleChange}
                />
                All
              </label>

              {selectedContinent &&
                continentsSeasons[selectedContinent]?.map((season) => (
                  <label className={style.filterTitle} key={season}>
                    <input
                      type="checkbox"
                      name={season}
                      value={season}
                      checked={selectSeason.includes(season)}
                      onChange={handleChange}
                    />
                    {season}
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
