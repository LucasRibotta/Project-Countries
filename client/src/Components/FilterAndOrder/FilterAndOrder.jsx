import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinents, filterBySeason, clearFilter } from '../../Redux/actions/actions';
import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";
import ClearFilter from "./ClearFilter";


export default function FilterAndOrder({ setCurrentPage }) {
  const dispatch = useDispatch();
  const selectedContinent = useSelector(
    (state) => state.filters.selectedContinent
  );
  const selectedSeason = useSelector((state) => state.filters.selectedSeason);

  useEffect(() => {
    // Realizar el filtrado por continente y temporada al cargar la página
    if (selectedContinent) {
      dispatch(filterByContinents(selectedContinent));
    }
    if (selectedSeason) {
      dispatch(filterBySeason(selectedSeason));
    }
  }, [dispatch, selectedContinent, selectedSeason]);

  function handleFilterContinents(continent) {
    setCurrentPage(1);
    dispatch(filterByContinents(continent));
  }

  function handleFilterSeason(season) {
    setCurrentPage(1);
    dispatch(filterBySeason(season));
  }

  function handleClearFilters() {
    setCurrentPage(1);
    dispatch(clearFilter());
  }

  return (
    <div>
      <FilterContinents
        setCurrentPage={setCurrentPage}
        handleFilterContinents={handleFilterContinents}
      />
      <FilterActivity
        setCurrentPage={setCurrentPage}
        handleFilterSeason={handleFilterSeason}
      />
      <OrderNameAlpha setCurrentPage={setCurrentPage} />
      <OrderPopulation setCurrentPage={setCurrentPage} />
      <ClearFilter handleClearFilters={handleClearFilters} />
    </div>
  );
}