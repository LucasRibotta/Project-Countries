import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { orderByName } from '../../Redux/actions/actions'
import style from './style/Filter.module.css'

export default function OrderNameAlpha({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("");

  function handleSort(e) {
    console.log(handleSort)
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
    dispatch(orderByName(selectedSortOrder));
    setCurrentPage(1);
  }

  return (
    <div className={style.orderConteiner}>
      <select className={style.orderList} value={sortOrder} onChange={handleSort}>
        <option className={style.orderName} value="">Order By Alphabetical</option>
        <option className={style.orderName} value="a-z">A - Z</option>
        <option className={style.orderName} value="z-a">Z - A</option>
      </select>
    </div>
  );
}