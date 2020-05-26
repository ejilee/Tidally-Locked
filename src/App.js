import React, { useReducer, useCallback } from "react";
import Theme from "./theme";
import "./App.scss";
import { Header, Footer } from "./Layout";
import Viewer from "./Viewer";
import Interface from "./Interface";

const initAppState = {
  rotPer: 20,
  orbPer: 20,
  orbRad: 150,
  moonRad: 20,
  planRad: 50,
  sunDir: 100,
  tidLock: true,
  statusOn: false,
  statusMessage: "",
};

function appStateReducer(appState, action) {
  switch (action.type) {
    case "ROTATIONAL_PERIOD":
      return { ...appState, rotPer: action.rotPer };
    case "ORBITAL_PERIOD":
      return { ...appState, orbPer: action.orbPer };
    case "ORBIT_RADIUS":
      return { ...appState, orbRad: action.orbRad };
    case "MOON_SIZE":
      return { ...appState, moonRad: action.moonRad };
    case "PLANET_SIZE":
      return { ...appState, planRad: action.planRad };
    case "SUN_DIRECTION":
      return { ...appState, sunDir: action.sunDir };
    case "SET_TIDLOCK_STATE":
      return { ...appState, tidLock: action.tidLockState };
    case "STATUS_MESSAGE":
      return {
        ...appState,
        statusOn: action.stat[0],
        statusMessage: action.stat[1],
      };
    case "RESET_ALL":
      return initAppState;
    default:
      return appState;
  }
}

function App() {
  const [appState, dispatchAppState] = useReducer(
    appStateReducer,
    initAppState
  );

  const setRotOrbPer = useCallback((rotPer, orbPer) => {
    dispatchAppState({ type: "ROTATIONAL_PERIOD", rotPer });
    dispatchAppState({ type: "ORBITAL_PERIOD", orbPer });
    let tidLockState = rotPer === orbPer ? true : false;
    dispatchAppState({ type: "SET_TIDLOCK_STATE", tidLockState });
  }, []);

  const setOrbRad = useCallback((orbRad) => {
    dispatchAppState({ type: "ORBIT_RADIUS", orbRad });
  }, []);

  const setBodySize = useCallback((moonRad, planRad) => {
    dispatchAppState({ type: "MOON_SIZE", moonRad });
    dispatchAppState({ type: "PLANET_SIZE", planRad });
  }, []);

  const setSunDirection = useCallback((sunDir) => {
    dispatchAppState({ type: "SUN_DIRECTION", sunDir });
  }, []);

  const setStatusMessage = useCallback((stat) => {
    dispatchAppState({ type: "STATUS_MESSAGE", stat });
  }, []);

  const resetAll = useCallback((stat) => {
    dispatchAppState({ type: "RESET_ALL", stat });
  }, []);

  return (
    <Theme>
      <div className="App">
        <Header />
        <Viewer appState={appState} setStatusMessage={setStatusMessage} />
        <Interface
          appState={appState}
          setRotOrbPer={setRotOrbPer}
          setOrbRad={setOrbRad}
          resetAll={resetAll}
        />
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
