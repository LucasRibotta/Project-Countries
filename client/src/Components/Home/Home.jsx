import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from "../../redux/actions/actions";
import {Link} from 'react-router-dom'
import Card from "../CardCountry/Card";
import Pagination from "../Pagination/Pagination";
import style from './Home.module.css'
import FilterContinents from "../FilterAndOrder/FilterContinents";
import OrderNameAlpha from "../FilterAndOrder/OrderAlfa";
import OrderPopulation from '../FilterAndOrder/OrderPopulation';



export default function Home () {

    const dispatch = useDispatch();
    const allCountries = useSelector ((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1); //Se setea en 1 ya que mi primer pág es 1
    const [countryPerPage] = useState(10); // Se guarda la cantidad de países por página
    const indexOfLastCountrys = currentPage * countryPerPage; // 10
    const indexOfFristCountrys = indexOfLastCountrys - countryPerPage // 0
    const currentCountrys = allCountries.slice(indexOfFristCountrys, indexOfLastCountrys);


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


useEffect(()=> {
    dispatch(getCountries());
},[dispatch]);

function handleClick(e){
    //Para resetear la data de países
    console.log('clicked')
    e.preventDefault();
    dispatch(getCountries())

}

return (
    <div className={style.conteinerHome}>
        <Link to= '/countries'>Paises</Link>
        
        <h1>Bienvenidos a los paises</h1>

        <button onClick={e=> {handleClick(e)}}>
            Volver a cargar todos los paises
        </button>
        
    <div className={style.filtro}> 

        <div>
        <FilterContinents setCurrentPage={setCurrentPage}/>
        </div>
        <div>
        <OrderNameAlpha setCurrentPage={setCurrentPage}/>
        </div>
        <div>
         <OrderPopulation setCurrentPage={setCurrentPage}/>   
        </div>

        </div>

        <div className={style.cardHome}>
            {
             currentCountrys?.map(el => (
                 <Card 
                 key={el.id}
                 name={el.name} 
                 continents={el.continents} 
                 image={el.flags}  
                 />
                 ))
                }
        </div>

        <div className={style.pagination}>

            <Pagination 
            countryPerPage={countryPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            />

        </div>
            
    </div>

)


}