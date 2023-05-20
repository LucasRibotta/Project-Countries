import React from 'react';
import {Link} from 'react-router-dom'
import style from './Card.module.css'


export default function Card(props){
    const {name, image,continents,id} = props 
    return (
        <div className={style.card}>
          <div className={style.cardContainer}>
            <div className={style.imageContainer}>
              <img src={image} width="150" height="150" alt={name} />
            </div>
    
            <div className={style.contentContainer}>
              <h1>{name}</h1>
              <h3>{continents}</h3>
            </div>
          </div>
    
          <div className={style.buttonContainer}>
            <Link to={`/detail/${id}`}>
              <button>Look</button>
            </Link>
          </div>
        </div>
      );
    }

