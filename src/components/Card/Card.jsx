import React from "react";
import styles from "./Card.module.css";
import Avatar from "../../assets/gift.png";

function Card({ data }) {
  const hasClientData = data != null;
  return (
    <div className={styles.card}>
      <img src={!hasClientData ? Avatar : data?.avatar} alt="avatar" />
      {!hasClientData ? (
        <h3>98% Success Rate</h3>
      ) : (
        <div>
          <h3>{data?.name}</h3>
          {hasClientData && (
            <p className={styles.card__occupation}>{data?.occupation}</p>
          )}
        </div>
      )}
      <p>
        {!hasClientData
          ? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          : data?.info}
      </p>
      {!hasClientData && <div className={styles.button}> Read More</div>}
    </div>
  );
}

export default Card;
