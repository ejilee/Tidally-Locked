import React from "react";
import styled from "styled-components";
import Primary from "./Primary";
import Secondary from "./Secondary";
import Description from "./Description";

const StyledInterface = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.milkyWhite};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  color: ${(props) => props.theme.colors.textGray};
  font-family: "Roboto", sans-serif;

  @media ${(props) => props.theme.threshold.tablet} {
    flex-flow: row wrap;
  }
  @media ${(props) => props.theme.threshold.desktop} {
    flex-flow: column wrap;
  }

  .interface__divider--dynamic {
    width: calc(100% - 4rem);
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
    border-right: 0;
    align-self: center;
    margin: 0;
    @media ${(props) => props.theme.threshold.tablet} {
      width: 0;
      border-bottom: 0;
      border-right: 1px solid ${(props) => props.theme.colors.lightGray};
      align-self: stretch;
      margin: 3rem 0;
    }
    @media ${(props) => props.theme.threshold.desktop} {
      width: calc(100% - 4rem);
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
      border-right: 0;
      align-self: center;
      margin: 0;
    }
  }

  .interface__divider--horizontal {
    width: calc(100% - 4rem);
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
    align-self: center;
  }
`;

const Interface = ({
  appState,
  setRotOrbPer,
  setOrbRad,
  resetAll,
  pauseAll,
  resumeAll,
  forceLock,
  setBodySize,
  setSunDirection,
  toggleShadows,
  toggleLaser,
}) => {
  const {
    rotPer,
    orbPer,
    orbRad,
    moonRad,
    planRad,
    sunDir,
    tidLock,
    paused,
    showShadows,
    showLaser,
  } = appState;
  return (
    <StyledInterface className="app__ui">
      <Primary
        rotPer={rotPer}
        orbPer={orbPer}
        tidLock={tidLock}
        paused={paused}
        setRotOrbPer={setRotOrbPer}
        resetAll={resetAll}
        pauseAll={pauseAll}
        resumeAll={resumeAll}
        forceLock={forceLock}
      />
      <div className="interface__divider--dynamic" />
      <Secondary
        orbRad={orbRad}
        moonRad={moonRad}
        planRad={planRad}
        sunDir={sunDir}
        showShadows={showShadows}
        showLaser={showLaser}
        setOrbRad={setOrbRad}
        setBodySize={setBodySize}
        setSunDirection={setSunDirection}
        toggleShadows={toggleShadows}
        toggleLaser={toggleLaser}
      />
      <div className="interface__divider--horizontal" />
      <Description />
    </StyledInterface>
  );
};

export default React.memo(Interface);
