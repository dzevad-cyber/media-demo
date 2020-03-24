import React from "react";

import styles from "./BtnPlay.module.scss";

import { ReactComponent as PlaySvg } from "../../assets/icons/play_arrow-24px.svg";
import { ReactComponent as PuseSvg } from "../../assets/icons/pause-24px.svg";

const BtnPlay = ({ pause }) => {
  return (
    <div className={`${styles.play} ${styles.icon}`}>
      {pause ? <PuseSvg /> : <PlaySvg />}
    </div>
  );
};

export default BtnPlay;
