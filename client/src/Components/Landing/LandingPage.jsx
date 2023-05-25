import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';
import videoSource from '../../assets/mundoLanding.mp4';

const LandingPage = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleClick = () => {
    setIsHighlighted(true);
    // Realiza aquí la lógica adicional que deseas al hacer clic en el botón
  };

  return (
    <div className={style.landingContainer}>
      <video className={style.video} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className={style.content}>
        <h1 className={style.title}>Welcome to Countries API</h1>
        <div className={style.button}>
          <Link to="/home">
            <button
              className={isHighlighted ? style.highlightedButton : ''}
              onClick={handleClick}
            >
              GO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;