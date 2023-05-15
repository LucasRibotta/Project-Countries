import React from "react";
import {useDispatch} from 'react-redux';
import {orderByName} from '../../redux/actions/actions'

export default function OrderNameAlpha({setCurrentPage}) {
    const dispatch = useDispatch();
    

function handleSort(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    console.log(handleSort)
}

    return (
        <div>
            <select onChange={e=> handleSort(e)}>
                <option value="reset">Orden Alfabético</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
            </select>
        </div>
    )
}