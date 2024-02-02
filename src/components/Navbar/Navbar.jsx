import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import { ReactComponent as TwitterIcon } from "../../assets/Icon1.svg";
import { ReactComponent as InstagramIcon } from "../../assets/InstaIcon.svg";
import { ReactComponent as PinterestIcon } from "../../assets/Icon3.svg";
import { ReactComponent as FacebookIcon } from "../../assets/Icon4.svg";

function Navbar({ type }) {
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
      {type === "footer" ? (
        <div className={styles.socialIcons}>
          <InstagramIcon className={styles.socialIcon} />
          <FacebookIcon className={styles.socialIcon} />
          <TwitterIcon className={styles.socialIcon} />
          <PinterestIcon className={styles.socialIcon} />
        </div>
      ) : (
        <button className={styles.button}>Contact Now</button>
      )}
    </div>
  );
}

export default Navbar;
