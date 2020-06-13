import React, { createContext, useReducer, useCallback } from 'react';

const appInitState = {
    rotPer: 20,
    orbPer: 20,
    orbRad: 150,
    moonRad: 20,
    planRad: 50,
    sunDir: 100,
    tidLock: true,
    paused: false,
    statusMessage: "TIDALLY LOCKED!",
    showShadows: true,
    showLaser: true
}

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
    case "SHADOW_TOGGLE":
      return { ...appState, showShadows: !appState.showShadows };
    case "LASER_TOGGLE":
      return { ...appState, showLaser: !appState.showLaser };
    case "SET_TIDLOCK_STATE":
      return { ...appState, tidLock: action.tidLockState };
    case "FORCE_LOCK":
      return { ...appState, orbPer: appState.rotPer };
    case "PAUSE_ALL":
      return {
        ...appState,
        paused: true,
      };
    case "RESUME_ALL":
      return {
        ...appState,
        paused: false,
      };
    case "STATUS_MESSAGE":
      return {
        ...appState,
        statusMessage: action.message,
      };
    case "RESET_ALL":
      return appInitState;
    default:
      return appState;
  }
}

const AppContext = createContext(appInitState);

const ContextProvider = ({children}) => {

    const [appState, dispatchAppState] = useReducer(
      appStateReducer,
      appInitState
    );

    const setRotOrbPer = useCallback((rotPer, orbPer) => {
      if (rotPer > 0 && rotPer <= 100) {
        dispatchAppState({ type: "ROTATIONAL_PERIOD", rotPer });
      }
      if (orbPer > 0 && orbPer <= 100) {
        dispatchAppState({ type: "ORBITAL_PERIOD", orbPer });
      }
      let tidLockState = rotPer === orbPer ? true : false;
      dispatchAppState({ type: "SET_TIDLOCK_STATE", tidLockState });
      const message = "TIDALLY LOCKED!";
      dispatchAppState({ type: "STATUS_MESSAGE", message });
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
      const message = stat;
      dispatchAppState({ type: "STATUS_MESSAGE", message });
    }, []);
  
    const resetAll = useCallback(() => {
      dispatchAppState({ type: "RESUME_ALL" });
      dispatchAppState({ type: "RESET_ALL" });
      const message = "RESET TO DEFAULT";
      dispatchAppState({ type: "STATUS_MESSAGE", message });
    }, []);
  
    const pauseAll = useCallback(() => {
      dispatchAppState({ type: "PAUSE_ALL" });
      const message = "PAUSE ALL ANIMATION";
      dispatchAppState({ type: "STATUS_MESSAGE", message });
    }, []);
  
    const resumeAll = useCallback(() => {
      dispatchAppState({ type: "RESUME_ALL" });
      const message = "RESUME ALL ANIMATION";
      dispatchAppState({ type: "STATUS_MESSAGE", message });
    }, []);
  
    const forceLock = useCallback(() => {
      dispatchAppState({ type: "FORCE_LOCK" });
      const message = "FORCED TIDAL LOCKING";
      dispatchAppState({ type: "STATUS_MESSAGE", message });
      const tidLockState = true;
      dispatchAppState({ type: "SET_TIDLOCK_STATE", tidLockState });
    }, []);
  
    const toggleShadows = useCallback(() => {
      dispatchAppState({ type: "SHADOW_TOGGLE" });
    }, []);
  
    const toggleLaser = useCallback(() => {
      dispatchAppState({ type: "LASER_TOGGLE" });
    }, []);

    const value = {
        state : {appState},
        actions : {setRotOrbPer, setOrbRad, setBodySize, setSunDirection, setStatusMessage, resetAll, pauseAll, resumeAll, forceLock, toggleShadows, toggleLaser}
    };

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );

}

const ContextConsumer = AppContext.Consumer;

export { ContextProvider, ContextConsumer };

export default AppContext;