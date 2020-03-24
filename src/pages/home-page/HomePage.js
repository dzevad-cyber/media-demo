import React, { useContext } from "react";

import styles from "./HomePage.module.scss";

import { CoordinatesContext } from "../../context/Coordinates.xt";

const HomePage = () => {
  const { offsetTop, offsetLeft } = useContext(CoordinatesContext);

  return (
    <div className={styles.home}>
      <h1>Home page</h1>
      <div>{`${offsetTop}, ${offsetLeft}`}</div>
    </div>
  );
};

export default HomePage;
