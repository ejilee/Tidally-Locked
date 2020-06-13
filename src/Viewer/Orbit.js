import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from '../context';

const StyledOrbit = styled.div`
  position: absolute;
  z-index: 100;
  border: 2px dashed ${(props) => props.theme.colors.clearWhite};
  width: ${(props) => props.orbRad * 2 + "px" || "150px"};
  height: ${(props) => props.orbRad * 2 + "px" || "150px"};
  border-radius: 50%;
  top: calc(50% - ${(props) => props.orbRad + 2 + "px" || "50% - 75px"});
  left: calc(50% - ${(props) => props.orbRad + 2 + "px" || "50% - 75px"});
`;

const Orbit = () => {
  const { state } = useContext(AppContext);
  return <StyledOrbit orbRad={state.appState.orbRad} className="orbit__self" />;
};

export default React.memo(Orbit);
