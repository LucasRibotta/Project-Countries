import React from 'react';
import styles from './Card.module.css'

export default function Card({image, name, continents}){
    return(
        <div className={styles.card}>
            <img src={image} alt="img not found" width="200px" height="250px"/>
            <div className={styles.info}>
            <h3>{name}</h3>
            <h5>{continents}</h5>
            </div>
        </div>
    )

}