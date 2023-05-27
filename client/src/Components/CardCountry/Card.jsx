import React from 'react';
import {Link} from 'react-router-dom'
import style from './Card.module.css'


export default function Card(props){
    const {name, image,continents, id, season} = props 
    return (
      <div className={style.card} key={id}>
        <div className={style.cardImage}>
          <img src={image}  width="150" height="150" alt={name} />
        </div>
  
        <div className={style.cardInfo}>
          <h1>{name}</h1>
          <h3>{continents}</h3>
        </div>
  
        <div className={style.conteinerBtn}>
          <Link to={`/detail/${id}`}>
            <button className={style.btn}>More info</button>
          </Link>
        </div>
      </div>
    );
    }

