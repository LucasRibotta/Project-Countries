import React from "react";
import { useState } from "react";
import {getCountriesName} from '../../redux/actions/actions';
import {useDispatch} from 'react-redux';

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
            <input 
            type="text"
            placeholder="Buscar..."
            onChange={handleInputChange} 
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )
}