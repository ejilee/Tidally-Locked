import React, { useEffect } from "react";
import styled from "styled-components";
import Orbit from "./Orbit";
import Moon from "./Moon";
import Planet from "./Planet";
import Status from "./Status";
import Information from "./Information";

const StyledSpace = styled.section`
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.darkGray};
  border: 1px solid ${(props) => props.theme.colors.clearWhite};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  position: relative;
  overflow: hidden;
`;

const Viewer = ({ appState, setStatusMessage }) => {
  const {
    rotPer,
    orbPer,
    orbRad,
    moonRad,
    planRad,
    sunDir,
    tidLock,
    statusOn,
    statusMessage,
  } = appState;

  useEffect(() => {
    if (rotPer === orbPer) {
      setStatusMessage([true, "TIDAL LOCKING!"]);
    } else {
      setStatusMessage([false, ""]);
    }
  }, [rotPer, orbPer, setStatusMessage]);

  return (
    <StyledSpace className="app-view">
      <Orbit orbRad={orbRad} />
      <Moon
        rotPer={rotPer}
        orbPer={orbPer}
        orbRad={orbRad}
        moonRad={moonRad}
        sunDir={sunDir}
        tidLock={tidLock}
      />
      <Planet planRad={planRad} sunDir={sunDir} />
      <Information />
      {statusOn ? (
        <Status
          statusMessage={statusMessage}
          setStatusMessage={setStatusMessage}
        />
      ) : (
        ""
      )}
    </StyledSpace>
  );
};

export default Viewer;
