import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { getCountries} from "../../redux/actions/actions";
import SearchBar from "../Searchbar/Search";
import style from './navBar.module.css'


export default function NavBar() {

    const dispatch = useDispatch()

    function handleClick(e){
        //Para resetear la data de países
        console.log('clicked')
        e.preventDefault();
        dispatch(getCountries())
    
    }
  return (
    <div className={style.conteiner} >
        <div>
            <Link to='/'>Back</Link>
        </div>
        <div>
            <SearchBar />
        </div>
        <button onClick={e=> {handleClick(e)}}>
            Reset
        </button>
      <div >
         <Link to="/home" >HOME</Link>
         <Link to="/create"  >Create an Activity</Link>
      </div>
    </div>
  )
}