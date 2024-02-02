import React from "react";
import styles from "./TeamCard.module.css";

function TeamCard({ data: { avatar, name, cases } }) {
  return (
    <div className={styles.teamCard}>
      <img src={avatar} alt="avatar" />
      <div className={styles.teamCard__info}>
        <h1>{name}</h1>
        <p>{cases} Cases</p>
      </div>
    </div>
  );
}

export default TeamCard;
