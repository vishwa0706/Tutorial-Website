// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>YourCompany</div>
      <ul className={styles.navLinks}>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className={styles.button}>Get Started</button>
    </nav>
  );
}

export default Navbar;
