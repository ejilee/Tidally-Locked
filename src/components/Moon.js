import React from "react";
import styled, { css } from "styled-components";

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
      transform: rotate(0deg) translate(150px) rotate(0deg);
    }
    100% {
      transform: rotate(-360deg) translate(150px) rotate(360deg);
    }
  }
`;

const MoonBody = styled.div`
  position: absolute;
  background-color: #ff3;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 30px;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
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

const MoonFace = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  top: 30%;
  left: 0;
  background-color: ${props => props.faceColor || "#000"};
`;

const Moon = ({ rotPer, orbPer }) => {
  return (
    <StyledMoon orbPer={orbPer}>
      <MoonBody rotPer={rotPer}>
        <MoonFace faceColor="blue"></MoonFace>
      </MoonBody>
    </StyledMoon>
  );
};

export default Moon;
