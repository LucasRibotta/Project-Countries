import React from "react";
import { useState } from "react";
import {getCountriesName} from '../../redux/actions/actions';
import {useDispatch} from 'react-redux';
import style from './search.module.css'

export default function SearchBar() {
    
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e) {
        setName(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        dispatch(getCountriesName(name));
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
            <button className={style.submit} type="submit" onClick={handleSubmit}>
                <span>Seacrh</span>
            </button>

            </form>
        </div>
    )
}