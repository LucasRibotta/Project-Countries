import React from "react";
import { useDispatch } from 'react-redux';
import { filterByContinents, filterBySeason } from '../../Redux/actions/actions';
import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";
import ClearFilter from "./ClearFilter";


export default function FilterAndOrder({setCurrentPage}){
  const dispatch = useDispatch();

  const handleFilterContinents = (continent) => {
    setCurrentPage(1);
    dispatch(filterByContinents(continent));
  }

  const handleFilterSeason = (season) => {
    setCurrentPage(1);
    dispatch(filterBySeason(season));
  }

  return (
    <div>
      <FilterActivity
        setCurrentPage={setCurrentPage}
        handleFilterSeason={handleFilterSeason}
      />
      <FilterContinents
        setCurrentPage={setCurrentPage}
        handleFilterContinents={handleFilterContinents}
      />
      <OrderNameAlpha />
      <OrderPopulation />
      <ClearFilter />
    </div>
  );
}
