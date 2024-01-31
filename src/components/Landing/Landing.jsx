import React from "react";
import styles from "./Landing.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

function Landing() {
  return (
    <div className={styles.landing}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Landing;
