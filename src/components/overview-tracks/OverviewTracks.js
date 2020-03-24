import React from "react";

import styles from "./OverviewTracks.module.scss";

const OverviewTracks = ({ profile }) => {
  return (
    <div className={styles.content__tracks}>
      {profile.tracks.map(({ img, name, duration }, i) => (
        <div key={i} className={styles.content__track}>
          <img className={styles.content__img} src={img} alt="" />
          <div>
            <p className={styles.content__name}>{name}</p>
            <p className={styles.content__duration}>{duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewTracks;
