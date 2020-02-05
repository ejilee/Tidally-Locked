import React from "react";
import styled from "styled-components";

const OrbitLineStyled = styled.div`
  position: absolute;
  border: 2px solid #333;
  width: ${props => props.orbRad * 2 + "px" || "150px"};
  height: ${props => props.orbRad * 2 + "px" || "150px"};
  border-radius: ${props => props.orbRad * 2 + "px" || "150px"};
  top: calc(50% -  ${props => (props.orbRad + 2) + "px" || "50% - 75px"});
  left: calc(50% -  ${props => (props.orbRad + 2) + "px" || "50% - 75px"});
`

const OrbitLine = ({orbRad}) => {
  return (
    <OrbitLineStyled orbRad={orbRad} />
  );
};

export default OrbitLine;
