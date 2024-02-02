import React from "react";
import styles from "./Area.module.css";
import Grid from "@mui/material/Grid";

import { gallery } from "../../api/gallery";

const Gallery = ({ data: { img, name, type } }) => {
  let galleryClassName = type === "small" ? "styles.small" : "styles.big";
  return (
    <div className={galleryClassName}>
      <img className={styles.gallery__img} src={img} alt="gallery" />
      <h3 className={styles.text}>{name}</h3>
    </div>
  );
};

function Area() {
  return (
    <div className={styles.area}>
      <h1>Area of Practices</h1>
      <Grid container spacing={2} className={styles.grids}>
        <Grid className={styles.grid__item} item xs={6} md={8} lg={8} xl={8}>
          <Gallery data={gallery[0]} />
        </Grid>
        <Grid className={styles.grid__item} item xs={6} md={8} lg={4} xl={4}>
          <Gallery data={gallery[1]} />
        </Grid>
        <Grid className={styles.grid__item} item xs={6} md={8} lg={4} xl={4}>
          <Gallery data={gallery[2]} />
        </Grid>
        <Grid className={styles.grid__item} item xs={6} md={8} lg={8} xl={8}>
          <Gallery data={gallery[3]} />
        </Grid>
        <Grid className={styles.grid__item} item xs={6} md={8} lg={8} xl={8}>
          <Gallery data={gallery[4]} />
        </Grid>
        <Grid className={styles.grid__item} item xs={6} md={8} lg={4} xl={4}>
          <Gallery data={gallery[5]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Area;
