import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";

// pages
import ArtistPage from "./pages/artist-page/ArtistPage";
import PreviewPage from "./pages/preview-page/PreviewPage";

// components
import SideNavMenu from "./components/side-nav/SideNav";

// context
import { CoordinatesContext } from "./context/Coordinates.xt";
import Player from "./components/player/Player";

function App() {
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <SideNavMenu className={styles.navMenu} />
        <div className={styles.pages}>
          <CoordinatesContext.Provider
            value={{ offsetTop, offsetLeft, setOffsetTop, setOffsetLeft }}
          >
            <Switch>
              <Route exact path="/" component={ArtistPage} />
              <Route exact path="/artist/:name" component={PreviewPage} />
            </Switch>
            <Player />
          </CoordinatesContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
