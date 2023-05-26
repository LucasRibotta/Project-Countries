import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';


const LandingPage = () => {


  return (
    <div className={style.landingContainer}>

      
        <h1 className={style.title}>Welcome to the Country Tour</h1>
        <div className={style.button}>
          <Link to="/home">
            <button>
             <span>GO HOME</span>
            </button>
          </Link>
        </div>
      
    </div>
  );
};

export default LandingPage;