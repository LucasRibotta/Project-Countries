import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../Redux/actions/actions";

export default function ClearFilter({setCurrentPage}){
    const dispatch = useDispatch()
    const [ , setOrder] = useState("")

    function handleDefault(evt){
        const data = document.querySelectorAll('#all');
        data.forEach((e)=> e.checked = false)
        console.log(data)
        dispatch(clearFilter())
        setCurrentPage(1)
        setOrder(evt.target.value)
    }

    return(
        <div>
            <button onClick={handleDefault}>
                Clear Filter
            </button>
        </div>
    )
}