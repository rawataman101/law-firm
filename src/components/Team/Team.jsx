import React from "react";
import styles from "./Team.module.css";
import Grid from "@mui/material/Grid";
import TeamCard from "../TeamCard/TeamCard";
import { teamData } from "../../api/teamData";

function Team() {
  return (
    <div className={styles.team}>
      <h1 className={styles.team__h1}>Our Team</h1>
      <div className={styles.team__grid}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {teamData.map((ele, idx) => {
            return (
              <Grid
                key={idx}
                item
                className={styles.team__card}
                xl={4}
                lg={4}
                md={4}
                sm={6}
                xs={12}
              >
                <TeamCard data={ele} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Team;
