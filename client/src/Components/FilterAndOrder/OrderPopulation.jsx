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
            <option value="reset">Ordenar por Población</option>
            <option value="population +">Ascendente</option>
            <option value="population -">Descendente</option>
            </select>
        </div>
    )
}