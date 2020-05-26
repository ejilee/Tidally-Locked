import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0% {
    transform: scaleX(1.5) scaleY(0) translateX(200px) translateY(-0.5em)
      skewX(-140deg);
  }
  75% {
    transform: scaleX(1.5) scaleY(1.2) translateX(0) translateY(0.5em)
      skewX(-140deg);
  }
  100% {
    transform: scaleX(1) scaleY(1) translateX(0) translateY(0) skewX(-20deg);
  }
`;

const StyledStatus = styled.div`
  position: absolute;
  z-index: 500;
  width: 100%;
  height: 2em;
  text-align: center;
  bottom: 0;
  color: ${(props) => props.theme.colors.accentColor};
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  transform-origin: 50% 50%;
  transform: skewX(-20deg);
  animation-name: ${flash};
  animation-duration: 200ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;
`;

const Status = ({ statusMessage, setStatusMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatusMessage([false, ""]);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setStatusMessage]);

  return <StyledStatus>{statusMessage}</StyledStatus>;
};

export default React.memo(Status);
