import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from "../../redux/actions/actions";
import {Link} from 'react-router-dom'
import Card from "../CardCountry/Card";



export default function Home () {

    const dispatch = useDispatch();
    const allCountries = useSelector ((state) => state.countries);

useEffect(()=> {
    dispatch(getCountries());
},[dispatch]);

function handleClick(e){
    //Para resetear la data de países
    console.log('clicked')
    e.preventDefault();
    dispatch(getCountries)

}

return (
    <div>
        <Link to= '/countries'>Paises</Link>
        <h1>Bienvenidos a los paises</h1>
        <button onClick={e=> {handleClick(e)}}>
            Volver a cargar todos los paises
        </button>
        <div>
            <select >
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            {
             allCountries?.map(el => (
                <Card 
                key={el.id}
                name={el.name} 
                continents={el.continents} 
                image={el.flags}  
                />
              ))
            }
            
        </div>
    </div>

)


}