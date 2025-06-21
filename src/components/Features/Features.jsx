// Features.jsx
import React from 'react';
import styles from './Features.module.css';

function Features() {
  const features = [
    { title: "Fast Performance", desc: "Optimized for speed and reliability." },
    { title: "Responsive Design", desc: "Looks great on all devices." },
    { title: "Easy Customization", desc: "Tweak the content with ease." }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why Choose Us</h2>
      <div className={styles.grid}>
        {features.map((item, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
