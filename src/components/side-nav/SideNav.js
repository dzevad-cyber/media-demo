import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./SideNav.module.scss";

import { ReactComponent as PlaylistSvg } from "../../assets/icons/playlist_play-24px.svg";
import { ReactComponent as ArtistSvg } from "../../assets/icons/account_circle-24px.svg";
import { ReactComponent as AlbumSvg } from "../../assets/icons/album-24px.svg";
import { ReactComponent as SongsSvg } from "../../assets/icons/queue_music-24px.svg";
import { ReactComponent as RadioSvg } from "../../assets/icons/radio-24px.svg";
import { ReactComponent as StoreSvg } from "../../assets/icons/store.svg";
import { ReactComponent as HeartSvg } from "../../assets/icons/heart.svg";
import { ReactComponent as BrowseSvg } from "../../assets/icons/browse.svg";

const SideNavMenu = () => {
  const navRef = useRef();

  const _onActive = e => {
    const list = navRef.current.getElementsByClassName(`${styles.active}`);
    Object.keys(list).forEach(i => {
      if (list[i]) {
        list[i].classList.remove(`${styles.active}`);
      }
    });

    e.target.classList.add(`${styles.active}`);
  };

  return (
    <nav className={styles.nav} ref={navRef}>
      <section>
        <h4 className={styles.title}>Library</h4>
        <ul>
          <li>
            <Link onClick={_onActive} className={styles.link} to="/playlist">
              <PlaylistSvg className={styles.icon} />
              <p className={styles.txt}>Playlist</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={_onActive}
              className={`${styles.link} ${styles.active}`}
              to="/"
            >
              <ArtistSvg className={styles.icon} />
              <p className={styles.txt}>Artists</p>
            </Link>
          </li>
          <li>
            <Link onClick={_onActive} className={styles.link} to="/albums">
              <AlbumSvg className={styles.icon} />
              <p className={styles.txt}>Albums</p>
            </Link>
          </li>
          <li>
            <Link onClick={_onActive} className={styles.link} to="/Songs">
              <SongsSvg className={styles.icon} />
              <p className={styles.txt}>Songs</p>
            </Link>
          </li>
        </ul>
      </section>
      {/* LIBRARY */}
      <section>
        <h4 className={styles.title}>Discover</h4>
        <ul>
          <li>
            <Link onClick={_onActive} className={styles.link} to="/store">
              <StoreSvg className={styles.icon} />
              <p className={styles.txt}>Store</p>
            </Link>
          </li>
          <li>
            <Link onClick={_onActive} className={styles.link} to="/radio">
              <RadioSvg className={styles.icon} />
              <p className={styles.txt}>Radio</p>
            </Link>
          </li>
          <li>
            <Link onClick={_onActive} className={styles.link} to="/forYou">
              <HeartSvg className={styles.icon} />
              <p className={styles.txt}>ForYou</p>
            </Link>
          </li>
          <li>
            <Link onClick={_onActive} className={styles.link} to="/browse">
              <BrowseSvg className={styles.icon} />
              <p className={styles.txt}>Browse</p>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default SideNavMenu;
