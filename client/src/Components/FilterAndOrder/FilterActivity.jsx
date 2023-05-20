import React from "react";
import {useDispatch} from 'react-redux';
import {filterTourActivity} from '../../redux/actions/actions';

export default function FilterActivity({setCurrentPage}){
    
    const dispatch = useDispatch();

    function handleActivity(e){
        console.log(FilterActivity)
        e.preventDefault();
        setCurrentPage(1)
        dispatch(filterTourActivity(e.target.value));

    }

    return(
        <div>
            <div>
            <select onChange={handleActivity}>

                <option value={"All"}>All Activities</option>
                <option value={"Summer"} key="Summer">Summer</option>
                <option value={"Spring"} key="Spring">Spring</option>
                <option value={"Autumn"} key="Autumn">Autumn</option>
                <option value={"Winter"} key="Winter">Winter</option>

            </select>
            </div>
        </div>
    )
}