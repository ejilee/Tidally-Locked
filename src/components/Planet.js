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

const PlanetLight = styled.div`
  position: absolute;
  background: linear-gradient(${props => props.sunDir + "deg" || "120deg"}, rgba(255,245,210,.3) 0%, rgba(255,255,255,.5) 20%, rgba(255,255,255,.1) 50%, rgba(30,20,20,.8) 100%);
  width: 100%;
  height: 100%;
  border-radius: 100%;
  top: 0;
  left: 0;
`;

const Planet = ({plaSiz, sunDir}) => {
  return (
    <div className="planetContainer">
      <PlanetBody plaSiz={plaSiz}>
        <PlanetLight sunDir={sunDir} />
      </PlanetBody>
    </div>
  );
};

export default Planet;
