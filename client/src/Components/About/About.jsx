import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from './About.module.css'
import linkedinIcon from "../../assets/logoLinkedin1.png";
import githubIcon from "../../assets/icongitHub1.png";
import whatsappIcon from "../../assets/iconwppgreen.png";
import plane from '../../assets/home.png'

export default function About(){
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleGoHome = () => {
      history.push("/home");
    };
  
    return (
      <div>
        <button onClick={handleGoHome} className={styles.homeButton} style={{ fontSize: '24px', color:"black" }}>
        <img src={plane} alt="back" />
        </button>
        <div className={styles.container}>
          <div>
            <h1>Countries</h1>
            <h3>Info de Api</h3>
          </div>
        <div>
          <button onClick={toggleMenu} className={styles.socialButton}>
            Redes
          </button>
          <div className={`${styles.socialMenu} ${isOpen ? styles.open : ""}`}>
            <a href="https://www.linkedin.com/in/lucas-alejandro-ribotta-a80362124/" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>
              <img src={linkedinIcon} alt="linkedin" />
              </div>
            </a>
            <a href="https://github.com/LucasRibotta" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>
              <img src={githubIcon} alt="gitHub" />
              </div>
            </a>
            <a href="https://wa.me/+543534236236" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialIcon}>
              <img src={whatsappIcon} alt="whatsapp" />
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    );
};

/* <a href="https://www.linkedin.com/in/lucas-alejandro-ribotta-a80362124/" target="_blank" rel="noopener noreferrer">
<FaLinkedin />
</a>
<a href="https://github.com/LucasRibotta" target="_blank" rel="noopener noreferrer">
<FaGithub />
</a>
<a href="https://wa.me/+543534236236" target="_blank" rel="noopener noreferrer">
<FaWhatsapp /> */