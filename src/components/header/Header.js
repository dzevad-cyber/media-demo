import React from "react";

// icons
import { ReactComponent as ArrowBaackSvg } from "../../assets/icons/arrow-left-24px.svg";
import { ReactComponent as ShuffleSvg } from "../../assets/icons/shuffle-24px.svg";

import styles from "./Header.module.scss";

import BtnPlay from "../btn-play/BtnPlay";

const Header = ({ offsetLeft, offsetTop, onGoBack, profile }) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.arrowBack} ${styles.icon}`}>
        <ArrowBaackSvg onClick={onGoBack} />
      </div>
      <div className={styles.artistInfo}>
        <img
          style={{
            transform: `translate(calc(${offsetLeft}px - 20vw), ${offsetTop}px)`
          }}
          className={styles.header__img}
          src={profile.img}
          alt=""
        />
        <div className={styles.artistInfo__box}>
          <div className={styles.artistInfo__name}>{profile.name}</div>
          <div className={styles.artistInfo__music}>{profile.genre}</div>
        </div>
      </div>
      <div className={`${styles.shuffle} ${styles.icon}`}>
        <ShuffleSvg />
      </div>
      <BtnPlay />
    </header>
  );
};

export default Header;
