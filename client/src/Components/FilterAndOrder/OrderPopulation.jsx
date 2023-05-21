import React from "react";
import { useDispatch } from "react-redux";
import {orderByPopulation} from '../../redux/actions/actions';

export default function OrderPopulation ({ setCurrentPage }) {
    const dispatch = useDispatch()

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);

    }

    return(
        <div>
            <select onChange={handleSort}>
            <option value="reset">Order by Population</option>
            <option value="population +">Asc</option>
            <option value="population -">Desc</option>
            </select>
        </div>
    )
}