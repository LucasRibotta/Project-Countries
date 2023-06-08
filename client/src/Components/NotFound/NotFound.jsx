import React from "react";
import notFound from '../../assets/Error404.mp4'
import style from './NotFound.module.css'

export default function NotFound(){
    return(
        <div className={style.notFound}>
            <video className={style.video} autoPlay muted loop>
                <source src={notFound} type='video/mp4'/>
                <source src={notFound} type="video/webm" />
            </video>
            <h2>ERROR 404</h2>
        </div>
    )
}