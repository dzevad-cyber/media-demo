import React from "react";

import styles from "./PlaylistTracks.module.scss";

const PlaylistTracks = ({ profile: { tracks } }) => {
  return (
    <section className={styles.playlist}>
      <h2 className={styles.playlist__title}>Playlist</h2>
      <div className={styles.playlist__tracks}>
        {tracks.map(({ img, name }, i) => (
          <div
            key={i}
            className={styles.playlist__track}
            style={{ backgroundImage: `url(${img})` }}
          >
            <p className={styles.playlist__name}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaylistTracks;
