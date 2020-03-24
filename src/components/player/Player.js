import React from "react";

import styles from "./Player.module.scss";

import work from "../../assets/imgs/rihanna/work.d832b6f9.jpg";

import { ReactComponent as SkipNextSvg } from "../../assets/icons/skip_next-24px.svg";
import { ReactComponent as SkipPreviousSvg } from "../../assets/icons/skip_previous-24px.svg";
import { ReactComponent as FavoriteSvg } from "../../assets/icons/favorite-24px.svg";
import { ReactComponent as VolumeSvg } from "../../assets/icons/volume_up-24px.svg";
import BtnPlay from "../btn-play/BtnPlay";

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.track}>
        <img className={styles.track__img} src={work} alt="" />
        <p className={styles.track__album}>Work</p>
        <p className={styles.track__artist}>Rihanna</p>
      </div>
      <div className={styles.controlles}>
        <SkipPreviousSvg className={styles.controlles__skipPrev} />
        <BtnPlay pause="true" />
        <SkipNextSvg className={styles.controlles__skipNext} />
        <div className={styles.controlles__seek}></div>
        <FavoriteSvg className={styles.controlles__favorite} />
        <VolumeSvg className={styles.controlles__vol} />
      </div>
    </div>
  );
};

export default Player;
