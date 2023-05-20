import React from "react";
import { useState } from "react";
import {getCountriesName} from '../../redux/actions/actions';
import {useDispatch} from 'react-redux';
import style from './search.module.css'

export default function SearchBar() {
    
    const dispatch = useDispatch();
    const [name, setName] = useState("");

function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value)
    console.log(name)
}

function handleSubmit(e){
    e.preventDefault();
    dispatch(getCountriesName(name))
    
}



    return(
        <div>
            
            <form action="search-bar">
            
            <input 
            type="search"
            placeholder="Search..."
            onChange={handleInputChange} 
            className={style.search}
            />
            <button className={style.submit} type="submit" onClick={(e) => handleSubmit(e)}>
                <span>Seacrh</span>
            </button>

            </form>
        </div>
    )
}