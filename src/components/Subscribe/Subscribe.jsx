import React from "react";
import styles from "./Subscribe.module.css";
import Footer from "../Footer/Footer";
export default function Subscribe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subscribe}>
        <h1>Subscribe Our Newsletter</h1>
        <div className={styles.input__wrapper}>
          <input
            className={styles.input__name}
            type="text"
            required
            placeholder="Name:"
          />
          <input
            className={styles.input__email}
            type="email"
            required
            placeholder="Enter you Email"
          />
          <div className={styles.button__send}>Send</div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
