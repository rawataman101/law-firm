import React from "react";
import styles from "./Clients.module.css";
import Card from "../Card/Card";
import { clientsData } from "../../api/clientsData";
import { ReactComponent as LeftArrow } from "../../assets/left.svg";
import { ReactComponent as RightArrow } from "../../assets/right.svg";

function Clients() {
  return (
    <div className={styles.clients}>
      <div className={styles.clients__header}>
        <h1>What says out happy Clients</h1>
        <div className={styles.clients__buttons}>
          <div className={styles.leftButton}>
            <LeftArrow />
          </div>
          <div className={styles.rightButton}>
            <RightArrow />
          </div>
        </div>
      </div>

      <div className={styles.clients__cards}>
        {clientsData.map((clientData, idx) => (
          <Card key={idx} data={clientData} />
        ))}
      </div>
    </div>
  );
}

export default Clients;
