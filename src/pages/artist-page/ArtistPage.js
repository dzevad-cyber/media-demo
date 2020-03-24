import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import styles from "./ArtistPage.module.scss";

// context
import { CoordinatesContext } from "../../context/Coordinates.xt";

// data
import { trending, popular } from "../../data/data";

const ArtistPage = () => {
  const { setOffsetTop, setOffsetLeft } = useContext(CoordinatesContext);
  const history = useHistory();

  const onGetTopLeftOffset = (e, profileName) => {
    setOffsetTop(e.target.parentElement.offsetTop);
    setOffsetLeft(e.target.parentElement.offsetLeft);

    history.push(`/artist/${profileName}`);
  };

  return (
    <div className={styles.artists}>
      <h4 className={styles.artists__title}>Artists</h4>

      <section className={styles.trending}>
        <h2 className={styles.titleSection}>Trending Now</h2>
        <div className={styles.tiles}>
          {Object.keys(trending).map((profileName, key) => (
            <div
              key={key}
              onClick={e => onGetTopLeftOffset(e, profileName)}
              className={`${styles.artist} ${styles[profileName]}`}
              id={profileName}
            >
              <img
                className={styles.artist__img}
                src={trending[profileName].img}
                alt=""
              />
              <div className={styles.artist__info}>
                <p className={styles.artist__name}>
                  {trending[profileName].name}
                </p>
                <p className={styles.artist__category}>
                  {trending[profileName].genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.popular}>
        <h2 className={styles.titleSection}>Popular</h2>
        <div className={styles.tiles}>
          {Object.keys(popular).map((profileName, key) => (
            <div
              key={key}
              onClick={e => onGetTopLeftOffset(e, profileName)}
              className={`${styles.artist} ${styles[profileName]}`}
              id={profileName}
            >
              <img
                className={styles.artist__img}
                src={popular[profileName].img}
                alt=""
              />
              <div className={styles.artist__info}>
                <p className={styles.artist__name}>
                  {popular[profileName].name}
                </p>
                <p className={styles.artist__category}>
                  {popular[profileName].genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistPage;
