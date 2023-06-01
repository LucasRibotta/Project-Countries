import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySeason } from '../../Redux/actions/actions';
import style from './style/Filter.module.css'

export default function FilterActivity({ setCurrentPage, handleFilterSeason }) {
  const dispatch = useDispatch();
  const selectedContinent = useSelector((state) => state.allContinents);
  const [isOpen, setIsOpen] = useState(false)
  const [selectSeason, setSelectSeason] = useState([])
  
  const continentsSeasons = {
    "North America": ["Summer", "Spring", "Autumn", "Winter"],
    "South America": ["Summer", "Spring", "Autumn", "Winter"],
    "Europe": ["Summer", "Spring", "Autumn", "Winter"],
    "Asia": ["Summer", "Spring", "Autumn", "Winter"],
    "Oceania": ["Summer", "Spring", "Autumn", "Winter"],
    "Africa": ["Summer", "Spring", "Autumn", "Winter"],
    "Antarctica": ["Summer", "Spring", "Autumn", "Winter"],
  }


  const handleChange = (e) => {
    const seasons = e.target.value
    setCurrentPage(1);
    setSelectSeason(seasons)
    dispatch(filterBySeason(seasons));
    handleFilterSeason(seasons);
    };

    function toggleDropdown(){
      setIsOpen(!isOpen)
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
          name='All'
          value='All'
          checked={selectSeason.includes('All')}
          onChange={handleChange}
          />
          All
        </label>
        
        {selectedContinent &&
           continentsSeasons[selectedContinent]?.map((season) => (
        <div>
        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Summer'
          value='Summer'
          checked={selectSeason.includes('Summer')}
          onChange={handleChange}
          />
          Summer
        </label>

        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Spring'
          value='Spring'
          checked={selectSeason.includes('Spring')}
          onChange={handleChange}
          />
          Spring
        </label>

        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Autumn'
          value='Autumn'
          checked={selectSeason.includes('Autumn')}
          onChange={handleChange}
          />
          Autumn
        </label>

        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Winter'
          value='Winter'
          checked={selectSeason.includes('Winter')}
          onChange={handleChange}
          />
          Winter
        </label>
        </div>
        ))}
      </div>
          </div>
        )}
      </div>
      
    </div>
  );
}


