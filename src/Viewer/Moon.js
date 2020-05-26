import React from "react";
import styled from "styled-components";

const StyledMoon = styled.div`
  .moon__self {
    position: absolute;
    width: ${(props) => props.moonRad * 2 + "px" || "30px"};
    height: ${(props) => props.moonRad * 2 + "px" || "30px"};
    top: calc(50% - ${(props) => props.moonRad + "px" || "15px"});
    left: calc(50% - ${(props) => props.moonRad + "px" || "15px"});
    transform-origin: 50% 50%;
    animation-name: MOON-ROTATION;
    animation-duration: ${(props) => props.rotPer + "s" || "0s"};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${(props) => props.animationState || "running"};

    @keyframes MOON-ROTATION {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }

  .moon__lockline {
    position: absolute;
    height: 0;
    width: ${(props) => props.orbRad + "px" || "150px"};
    border: 1px solid #ff003d;
    top: calc(50% - 0.5px);
    left: calc(
      ${(props) => -1 * props.orbRad + "px" || "150px"} +
        ${(props) => props.moonRad + "px" || "15px"}
    );
    animation-name: FADE-IN;
    animation-duration: 300ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;

    @keyframes FADE-IN {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .moon__face {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 20px solid #fff387;
    top: calc(50% - 10px);
    left: -12px;
  }

  .moon__body {
    position: absolute;
    background-color: #fff387;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .moon__shade {
    position: absolute;
    background: linear-gradient(
      ${(props) => props.sunDir + "deg" || "120deg"},
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.15) 50%
    );
    width: ${(props) => props.moonRad * 2 + "px" || "30px"};
    height: ${(props) => props.moonRad * 2 + "px" || "30px"};
    overflow: hidden;
    border-radius: 50%;
    top: calc(50% - ${(props) => props.moonRad + "px" || "15px"});
    left: calc(50% - ${(props) => props.moonRad + "px" || "15px"});
  }
`;

const Moon = ({
  rotPer,
  orbPer,
  orbRad,
  moonRad,
  sunDir,
  tidLock,
  paused,
  showShadows,
  showLaser,
}) => {
  const animationState = paused ? "paused" : "running";

  const StyledRevolution = styled.div`
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    animation-duration: ${(props) => props.orbPer + "s" || "0s"};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: MOON-REVOLUTION;
    animation-play-state: ${(props) => props.animationState || "running"};

    @keyframes MOON-REVOLUTION {
      0% {
        transform: rotate(0deg)
          translate(${(props) => props.orbRad + "px" || "150px"}) rotate(0deg);
      }
      100% {
        transform: rotate(-360deg)
          translate(${(props) => props.orbRad + "px" || "150px"}) rotate(360deg);
      }
    }
  `;

  return (
    <StyledRevolution
      orbPer={orbPer}
      orbRad={orbRad}
      animationState={animationState}
    >
      <StyledMoon
        orbPer={orbPer}
        rotPer={rotPer}
        orbRad={orbRad}
        moonRad={moonRad}
        sunDir={sunDir}
        animationState={animationState}
      >
        <div className="moon__self">
          {tidLock && showLaser ? <div className="moon__lockline" /> : null}
          <div className="moon__face" />
          <div className="moon__body" />
        </div>

        {showShadows ? <div className="moon__shade" /> : ""}
      </StyledMoon>
    </StyledRevolution>
  );
};

export default React.memo(Moon);
