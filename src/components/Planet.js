import React from "react";
import styled from "styled-components";

const PlanetBody = styled.div`
  position: absolute;
  background-color: #54b7c7;
  width: ${props => props.plaSiz + "px" || "90px"};
  height: ${props => props.plaSiz + "px" || "90px"};
  border-radius: ${props => props.plaSiz + "px" || "90px"};
  top: calc(50% -  ${props => props.plaSiz/2 + "px" || "45px"});
  left: calc(50% -  ${props => props.plaSiz/2 + "px" || "45px"});
`

const Planet = ({plaSiz}) => {
  return (
    <div className="planetContainer">
      <PlanetBody plaSiz={plaSiz} />
    </div>
  );
};

export default Planet;
