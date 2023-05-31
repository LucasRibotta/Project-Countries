import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterByContinents, filterBySeason } from '../../Redux/actions/actions';
import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";
import ClearFilter from "./ClearFilter";

export default function FilterAndOrder({setCurrentPage}) {
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');

  const handleFilterContinents = (continent) => {
    setSelectedContinent(continent);
    setCurrentPage(1)
    dispatch(filterByContinents(continent));
  }

  const handleFilterSeason = (season) => {
    setSelectedSeason(season);
    setCurrentPage(1)
    dispatch(filterBySeason(season));
  }

  return (
    <div>
      <FilterActivity
        selectedSeason={selectedSeason}
        handleFilterSeason={handleFilterSeason}
      />
      <FilterContinents
        selectedContinent={selectedContinent}
        handleFilterContinents={handleFilterContinents}
      />
      <OrderNameAlpha />
      <OrderPopulation />
      <ClearFilter />
    </div>
  )
}
