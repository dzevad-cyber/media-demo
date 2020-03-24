import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import styles from "./PreviewPage.module.scss";

// context
import { CoordinatesContext } from "../../context/Coordinates.xt";

import Header from "../../components/header/Header";
import Popular from "../../components/popular-tracks/PopularTracks";
import Playlist from "../../components/playlist-tracks/PlaylistTracks";

import { profiles } from "../../data/data";
import OverviewTracks from "../../components/overview-tracks/OverviewTracks";

const PreviewPage = () => {
  const { offsetTop, offsetLeft } = useContext(CoordinatesContext);
  const history = useHistory();
  const { name } = useParams();

  const onGoBack = () => {
    history.goBack();
  };

  let profile = profiles[name];

  return (
    <div className={styles.preview}>
      <Header
        offsetLeft={offsetLeft}
        offsetTop={offsetTop}
        onGoBack={onGoBack}
        profile={profile}
      />
      <section className={styles.content}>
        <OverviewTracks profile={profile} />
        <Popular profile={profile} />
        <Playlist profile={profile} />
      </section>
    </div>
  );
};

export default PreviewPage;
