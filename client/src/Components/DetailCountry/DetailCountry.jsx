import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";
import style from './Detail.module.css'
import { Link } from 'react-router-dom';

export default function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detailId);
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.detailContainer}>
      <div className={style.linksSection}>
        <Link to='/create' className={style.linkButton}>Add an Activity</Link>
        <Link to='/home' className={style.linkButton}>⬅ Back to home</Link>
      </div>
      <div className={style.nameFlagsContainer}>
        <div className={style.flagContainer}>
          {details.hasOwnProperty("name") ? (
            <div>
              <img className={style.flagImage} src={details.flags} alt='Bandera' />
            </div>
          ) : (
            <p>Buscando.....</p>
          )}
        </div>
        <div className={style.nameContainer}>
          {details.hasOwnProperty("name") && (
            <h2>{details.name}</h2>
          )}
        </div>
      </div>

      <div className={style.countriesActivitiesContainer}>
        <div className={style.countriesContainer}>
          {details.hasOwnProperty("name") && (
            <div className={style.details}>
              <p>Continent: {details.continents}</p>
              <p>Capital: {details.capital.replace(/["{}]/g, '')}</p>
              <p>Subregion: {details.subregion}</p>
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
                    <span>Season: {act.season}</span>
                    <span>Duration: {act.duration}</span>
                    <span>Difficulty: {act.difficulty}</span>
                  </p>
                </div>
              ))
            ) : (
              <h3 className={style.noActivity}>The country has no activities!</h3>
            )}
          </div>
      </div>

      <div className={style.mapContainer}>
        {details.hasOwnProperty("name") && (
          <div className={style.map}>
            <h3>Map:</h3>
            <iframe
              width="100%"
              height="450"
              title="Map"
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${details.maps}`}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>


    </div>
  );
}




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




