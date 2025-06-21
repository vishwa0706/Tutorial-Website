import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Your Business Site</h1>
        <p className={styles.description}>
          Build your presence with a professional and stunning design.
        </p>
        <button className={styles.cta}>Explore Now</button>
      </div>
    </section>
  );
}

export default Hero;