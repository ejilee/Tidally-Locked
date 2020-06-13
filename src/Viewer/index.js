import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import AppContext from '../context';
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

const Viewer = () => {

  const { state } = useContext(AppContext);
  const { rotPer, orbPer, statusMessage } = state.appState;

  const [ messageState, setMessageState ] = useState(true);

  useEffect(() => {
    if (rotPer === orbPer) {
      setMessageState(true);
    } else {
      setMessageState(false);
    }
  }, [rotPer, orbPer, statusMessage, setMessageState]);

  const removeStatusMessage =  () => {
    setMessageState(false);
  }

  return (
    <StyledSpace className="app__viewer">
      <Orbit />
      <Moon />
      <Planet />
      <Information />
      {messageState ? (
        <Status message={statusMessage} removeStatusMessage={removeStatusMessage} />
      ) : (
        ""
      )}
    </StyledSpace>
  );
};

export default Viewer;
