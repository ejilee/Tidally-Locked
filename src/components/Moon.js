import React from "react";
import styled from "styled-components";

const StyledMoon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  animation-name: MOON-REVOLUTION;
  animation-duration: ${props => props.orbPer + "s" || "0s"};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes MOON-REVOLUTION {
    0% {
      transform: rotate(0deg) translate(${props => props.orbRad + "px" || "150px"}) rotate(0deg);
    }
    100% {
      transform: rotate(-360deg) translate(${props => props.orbRad + "px" || "150px"}) rotate(360deg);
    }
  }
`;

const MoonBody = styled.div`
  position: absolute;
  background-color: #f6ff80;
  width: ${props => props.mooSiz + "px" || "30px"};
  height: ${props => props.mooSiz + "px" || "30px"};
  border-radius: ${props => props.mooSiz + "px" || "30px"};
  top: calc(50% -  ${props => props.mooSiz/2 + "px" || "15px"});
  left: calc(50% -  ${props => props.mooSiz/2 + "px" || "15px"});
  transform-origin: 50% 50%;
  animation-name: MOON-ROTATION;
  animation-duration: ${props => props.rotPer + "s" || "0s"};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes MOON-ROTATION {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const MoonLight = styled.div`
  position: absolute;
  background: linear-gradient(${props => props.sunDir + "deg" || "120deg"}, rgba(255,245,210,.3) 0%, rgba(255,255,255,.5) 20%, rgba(255,255,255,.1) 50%, rgba(30,20,20,.8) 100%);
  width: ${props => props.mooSiz + "px" || "30px"};
  height: ${props => props.mooSiz + "px" || "30px"};
  overflow: hidden;
  border-radius: ${props => props.mooSiz + "px" || "30px"};
  top: calc(50% -  ${props => props.mooSiz/2 + "px" || "15px"});
  left: calc(50% -  ${props => props.mooSiz/2 + "px" || "15px"});
`;

const MoonFace = styled.div`
  width: 40%;
  height: 20%;
  position: absolute;
  top: 35%;
  left: -20%;
  background-color: #FFF;
`;

const Moon = ({ rotPer, orbPer, orbRad, mooSiz, sunDir }) => {
  return (
    <StyledMoon orbPer={orbPer} orbRad={orbRad}>
      <MoonBody rotPer={rotPer} mooSiz={mooSiz}>
        <MoonFace></MoonFace>
      </MoonBody>
      <MoonLight mooSiz={mooSiz} sunDir={sunDir} />
    </StyledMoon>
  );
};

export default Moon;
