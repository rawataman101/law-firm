import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.menu}>
        <p className={styles.menu__text}>Home</p>
        <p className={styles.menu__text}>Attorneys</p>
        <p className={styles.menu__text}>Practice Areas</p>
        <p className={styles.menu__text}>About Us</p>
      </div>
      <button className={styles.button}>Contact Now</button>
    </div>
  );
}

export default Navbar;
