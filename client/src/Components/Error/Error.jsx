import React from 'react'
import { Link } from 'react-router-dom'
import style from './Error.module.css'

export default function Error(){
    return (
        <div className={style.conteiner}>
            <h1 className={style.tittle}>Error 404</h1>
            <p>Page not found</p>
            <Link to="/">
               <button className={style.button}>
                   Go back 
                </button> 
            </Link>

        </div>
    )
}