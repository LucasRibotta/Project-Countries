import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../Redux/actions/actions";
import style from './style/Filter.module.css'

export default function ClearFilter({setCurrentPage, }){
    const dispatch = useDispatch()
    const [  , setOrder] = useState("")

    function handleDefault(evt) {
      setCurrentPage(1);
      setOrder(evt.target.value);
      dispatch(clearFilter());

    }

    return(
        <div>
            <button className={style.clear} onClick={handleDefault} >
                Clear Filter 
            </button>
        </div>
    )
}