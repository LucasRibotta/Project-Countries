import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FilterContinents from "./FilterContinents"
import FilterActivity from "./FilterActivity"
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from './OrderPopulation';
import style from './style/Filter.module.css'


export default function FilterAndOrder({ setCurrentPage }) {

  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleFilterChange(e) {
    const filter = e.target.value;
    setCurrentPage(1);
    if (selectedFilters.includes(filter)) {
      const updatedFilters = selectedFilters.filter(f => f !== filter);
      setSelectedFilters(updatedFilters);
    } else {
      const updatedFilters = [...selectedFilters, filter];
      setSelectedFilters(updatedFilters);
    }
  }

  function handleOrderChange(e) {
    const order = e.target.value;
    setCurrentPage(1);
    if (selectedOrders.includes(order)) {
      const updatedOrders = selectedOrders.filter(o => o !== order);
      setSelectedOrders(updatedOrders);
    } else {
      const updatedOrders = [...selectedOrders, order];
      setSelectedOrders(updatedOrders);
    }
  }

  useEffect(() => {
    dispatch(FilterContinents(selectedFilters));
    dispatch(FilterActivity(selectedFilters));
    dispatch(OrderNameAlpha(selectedOrders.includes("NameAlpha")));
    dispatch(OrderPopulation(selectedOrders.includes("Population")));
  }, [selectedFilters, selectedOrders, dispatch]);

  return (
    <div className={style.filterAndOrder}>
      <button onClick={() => setIsOpen(!isOpen)}>Filter & Order</button>
      {isOpen && (
        <div className={style.dropdown}>
          <h3>Filters</h3>
          <label>
            <input
              type="checkbox"
              value="North America"
              checked={selectedFilters.includes("North America")}
              onChange={handleFilterChange}
            />
            North America
          </label>
          <label>
            <input
              type="checkbox"
              value="South America"
              checked={selectedFilters.includes("South America")}
              onChange={handleFilterChange}
            />
            South America
          </label>
          {/* Agrega más opciones de filtro aquí */}

          <h3>Order</h3>
          <label>
            <input
              type="checkbox"
              value="NameAlpha"
              checked={selectedOrders.includes("NameAlpha")}
              onChange={handleOrderChange}
            />
            Name (A-Z)
          </label>
          <label>
            <input
              type="checkbox"
              value="Population"
              checked={selectedOrders.includes("Population")}
              onChange={handleOrderChange}
            />
            Population
          </label>
          {/* Agrega más opciones de orden aquí */}
        </div>
      )}
    </div>
  );
}


