import React from "react";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import { /* clearDetail */ getDetail } from "../../redux/actions/actions";
import {Link} from 'react-router-dom';


export default function Detail(){

    const dispatch = useDispatch();
    const details = useSelector((state)=> state.detailId)
    const {id} = useParams()

    useEffect(()=> {
        dispatch(getDetail(id))

    }, [dispatch, id])


      return (
      
          <div key={details.id}>
              {
              details.hasOwnProperty("name") ?
              <div>
                <div >
                  <div>
                    
                    <h2 >{details.name}</h2>
                    <img src={details.flags} alt='Bandera' />
                    <p>Continent: {details.continents}</p>
                    <p>Capital: {details.capital}</p>
                    <p>Subregion: {details.subregion}</p>
                    <p>Area: {parseInt(details.area).toLocaleString('de-DE')} Km2</p>
                    <p>Population: {details.population.toLocaleString('de-DE')}</p>
                    <h3>{details.maps}</h3><h3>
                      <a href={details.maps} target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/color/48/000000/google-maps.png" alt="Mapa" />
                      </a>
                    </h3>
              
                  </div>
              </div>
              <div >
                
                <div >
                <br/>
                <h2><i >Activities:</i></h2>
                  {
                    details.activities?.length > 0 
                    ? details.activities.map(act => (
                      <p key={act.id} >
                        <li className='titleAct'>Activity: {act.name}</li>
                        <li>Season: {act.season}</li>
                        <li>Duration: {act.duration}</li>
                        <li>Difficulty: {act.difficulty}</li>
                        <br/>
                      </p>
                    )) : <h3 className='noActivity'>¡The country has no activities!</h3>
                  }
                </div>
              </div>
            </div> : <p>Buscando.....</p>
          }
                 <div>
           
               <h3><Link to='/create'>Add an Activity</Link></h3>
                </div>
          
    
        <div><Link to='/home'>⬅ Back to home </Link></div>
        </div>
        )
    
    }






    /* <Link to={"/home"}>
        <button>Back to Home</button>
        </Link>
      </div>
         <div >
          
            <div >
            <h2 >{details.name}</h2> 
            <img src={details.flags} alt="No hay Bandera" />
              <h5>{details.id}</h5> 
              <h5> <b>Continent:</b> { details.continent}</h5> 
              <h5><b>Capital:</b> { details.capital}</h5>
              <h5><b>Population:</b> { details.population}</h5>
              <h5><b>Area:</b>  km2</h5>
              <h5><b>Subregion:</b> {details.subregion}</h5>
          
              </div> 
                <h3 >Activities:</h3>
            {details.activities.length?
             details.activities.map(e=>{
                
              return (
              <div >
              
                <h5><b>Activity:</b> {e.name}</h5>
                <h5><b>Difficulty:</b> {e.difficulty}</h5>
                <h5><b>Duration:</b> {e.duration} hs</h5>
                <h5><b>Season:</b> {e.season}</h5>   
              </div>
              )
            }) : <div> <h3 >There are no registered activities</h3></div>
            }
             </div>
      </div>

    </> */    