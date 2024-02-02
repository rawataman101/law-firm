import React from "react";
import styles from "./About.module.css";
import Card from "../Card/Card";
function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about__introWrapper}>
        <div className={styles.about__intro1}>
          <h1>Let’s Introduce Ourself</h1>
        </div>
        <div className={styles.about__introLine}></div>
        <div className={styles.about__intro2}>
          <h3>Criminal Lawyer</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <div className={styles.about__cards}>
        <h1>Why Choose us?</h1>
        <div className={styles.aboutCards__cards}>
          {Array.from({ length: 3 }, (_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
