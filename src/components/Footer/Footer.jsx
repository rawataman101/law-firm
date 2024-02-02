import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.navbar}>
        <Navbar type={"footer"} />
      </div>
      <div className={styles.items}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
}

export default Footer;
