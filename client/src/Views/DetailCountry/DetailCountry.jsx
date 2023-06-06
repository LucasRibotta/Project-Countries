import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetail } from "../../Redux/actions/actions";
import style from './Detail.module.css'
import coordenadas from "./maps/utils/map";
import toCamelCase from "./maps/utils/utils";
import googleMaps from '../../assets/googleMaps.jpg'


export default function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailId);
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const difficultyMapping = {
    1: "Very Easy",
    2: "Easy",
    3: "Normal",
    4: "Difficult",
    5: "Extreme"
  };

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
  <div className={style.conteinerPrincipal}>
  <div className={style.detailContainer}>
    <div className={style.btnBack}>
  <Link to='/home' ><button>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
    <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
    <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
    </svg>
    </button> </ Link >
    </div>

  <div className={style.nameFlagsContainer}>

      {details.hasOwnProperty("name") ? (
        <div className={style.flagImage}>
          <img src={details.flags} alt='Bandera' className={style.flameando} />
        </div>
      ) : (
        <p>Buscando.....</p>
      )}  
    <div className={style.nameContainer}>
      {details.hasOwnProperty("name") && (
        <h2 className={style.titleCountries}>{details.name}</h2>
      )}
    </div>
  </div>

  <div className={style.countriesActivitiesContainer}>
    <div className={style.countriesContainer}>
      {details.hasOwnProperty("name") && (
        <div className={style.details}>
          <p>Continent: {details.continents}</p>
          <p>Capital: {details.capital.replace(/["{}]/g, '')}</p>
          <p>Area: {parseInt(details.area).toLocaleString('de-DE')} Km2</p>
          <p>Population: {details.population.toLocaleString('de-DE')}</p>
        </div>
      )}
    </div>
    <div className={style.activitiesContainer}>
        <h2><i>Activities:</i></h2>
        {details.activities?.length > 0 ? (
          details.activities.map(act => (
            <div key={act.id} className={style.activityItem}>
              <h3 className={style.titleAct}>Activity: {act.names}</h3>
              <p className={style.activityDetails}>
              {act.season && act.season.length > 0 ? (
                <span>Season: {act.season.map(season => season).join(", ")}</span>
              ) : (
                
                <span>No season information available</span>
              )}
               
                <span>Duration: {act.duration} hs</span>
                <span>Difficulty: {difficultyMapping[act.difficulty]}</span>
              </p>
            </div>
          ))
        ) : (
          <h3 className={style.noActivity}>The country has no activities!</h3>
        )}
      </div>
  </div>
  </div>        
    <div className={style.mapContainer}>
      {details.hasOwnProperty("name") && (
        <div className={style.map}>
          <h3>Map:</h3>
          {details.name && coordenadas.hasOwnProperty(toCamelCase(details.name)) ? (
            <iframe
              width="100%"
              height="450"
              title="Map"
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${coordenadas[toCamelCase(details.name)].join(",")}&zoom=6`}
              ></iframe>
          ) : (
            <a href={details.maps} target="_blank" rel="noopener noreferrer">
                    <img src={googleMaps} alt="Mapa" className={style.iconMap} />
                  </a>
          )}
        </div>
      )}
    </div>

  </div>   

  );
}

//RESETEO DE TODO


/* <script src="
https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false
"></script>  */





/* import React from "react";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";
import {Link} from 'react-router-dom';
 */


/* export default function Detail(){

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
    
    } */






