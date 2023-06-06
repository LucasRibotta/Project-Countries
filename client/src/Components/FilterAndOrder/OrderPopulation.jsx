import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByPopulation } from "../../Redux/actions/actions";
import style from "./style/Filter.module.css";

export default function OrderPopulation({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  function handleSort(e) {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
    dispatch(orderByPopulation(selectedSortOrder));
    setCurrentPage(1);
  }

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={style.orderConteiner}>
      <select
        className={`${style.orderList} ${isExpanded ? style.expanded : ''}`}
        value={sortOrder}
        onChange={handleSort}
        onClick={toggleExpand}
      >
        <option className={style.orderName} value="all">Order By Population</option>
        <option className={style.orderName} value="asc">Ascending</option>
        <option className={style.orderName} value="desc">Descending</option>
      </select>
    </div>
  );
}