import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css'
import videoSource from '../../assets/mundoLanding.mp4'



export default function LandingPage () {
    return (
        <div className={style.landingConteiner}> 
              <video className={style.video} autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
            </video> 
        <div className={style.content}>      
            <h1 className={style.tittle}>Welcome to Countries API</h1>
        <div className={style.button}>        
            <Link to ='/home'>
            <button >GO HOME</button>
            </Link>
        </div>        
        </div>
        </div>
    )
}