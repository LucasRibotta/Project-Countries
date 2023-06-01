import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinents,
  filterBySeason,
  clearFilter,
} from "../../Redux/actions/actions";
import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";
import ClearFilter from "./ClearFilter";

export default function FilterAndOrder({ setCurrentPage }) {
  const dispatch = useDispatch();
  const allContinents = useSelector((state) => state.allContinents);
  const season = useSelector((state) => state.season);

  const [selectedOrder, setSelectedOrder] = useState(""); // Estado para el ordenamiento seleccionado

  useEffect(() => {
    // Realizar el filtrado por temporada al cargar la página
    if (season) {
      dispatch(filterBySeason(season));
    }
  }, [dispatch, season]);

  function handleFilterContinents(continent) {
    setCurrentPage(1);
    dispatch(filterByContinents(continent));

    // Si hay una temporada seleccionada, realizar el filtrado por temporada y continente
    if (season) {
      dispatch(filterBySeason(season, continent));
    }
  }

  function handleFilterSeason(season) {
    setCurrentPage(1);
    dispatch(filterBySeason(season));

    // Si hay un continente seleccionado, realizar el filtrado por temporada y continente
    if (allContinents) {
      dispatch(filterBySeason(season, allContinents));
    }
  }

  function handleOrderSelection(order) {
    setCurrentPage(1);
    setSelectedOrder(order);
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
      <OrderNameAlpha
        setCurrentPage={setCurrentPage}
        handleOrderSelection={handleOrderSelection}
        selected={selectedOrder === "nameAlpha"}
      />
      <OrderPopulation
        setCurrentPage={setCurrentPage}
        handleOrderSelection={handleOrderSelection}
        selected={selectedOrder === "population"}
      />
      <ClearFilter handleClearFilters={handleClearFilters} />
    </div>
  );
}