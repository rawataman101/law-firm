import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assets/hero.png";
import { ReactComponent as MessageIcon } from "../../assets/message_icon.svg";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroText__h1}>
          You don’t have to{" "}
          <span className={styles.spanText}>Fight them Alone.</span>
        </h1>
        <p className={styles.heroText__p}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.hero__button}>
          <MessageIcon className={styles.messageIcon} />
          <input type="text" placeholder="Enter your email address" />
          <button>Let's Talk</button>
        </div>
      </div>
      <div className={styles.hero__img}>
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
