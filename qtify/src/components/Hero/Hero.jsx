import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assests/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 style={{ color: 'var(--color-white)' }}>100 Thousand Songs, ad-free</h1>
        <h1 style={{ color: 'var(--color-white)' }}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={HeroImage}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
