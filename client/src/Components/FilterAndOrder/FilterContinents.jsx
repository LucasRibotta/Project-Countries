import React from "react";
import {useDispatch} from 'react-redux';
import {filterByContinents} from '../../redux/actions/actions'

export default function FilterContinents ({setCurrentPage}) {
    const dispatch = useDispatch();
   

    function handleFilterContinents(e){
        e.preventDefault();
        setCurrentPage(1)
        dispatch(filterByContinents(e.target.value));
        console.log(handleFilterContinents)
    }

    
    return(
        <div>
        <div>
        <select onChange={handleFilterContinents}>
                <option value={"All"}>All Contients</option>
                <option value={"North America"} key="North America">North America</option>
                <option value={"South America"} key="South America">South America</option>
                <option value={"Europe"} key="Europe">Europe</option>
                <option value={"Asia"} key="Asia">Asia</option>
                <option value={"Oceania"} key="Oceania">Oceania</option>
                <option value={"Africa"} key="Africa">Africa</option>
                <option value={"Antarctica"} key="Antarctica">Antarctica</option>
            </select>
        </div>
    </div>
    )
}
//video 3 min 51