import React from "react";

import styles from "./PopularTracks.module.scss";

const PopularTracks = ({ profile }) => {
  return (
    <section className={styles.popular}>
      <h2 className={styles.popular__title}>Popular</h2>
      <div className={styles.popular__tracks}>
        {profile.tracks.map(({ img, name, duration, album }, i) => (
          <div key={i} className={styles.popular__track}>
            <div className={styles.popular__trackInfo}>
              <img className={styles.popular__img} src={img} alt="" />
              <p className={styles.popular__name}>{name}</p>
              <p className={styles.popular__album}>{album}</p>
            </div>
            <p className={styles.popular__duration}>{duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTracks;
