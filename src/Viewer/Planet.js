import React from "react";
import styled from "styled-components";

const PlanetBody = styled.div`
  position: absolute;
  z-index: 300;
  background-color: #8cb2c2;
  width: ${(props) => props.planRad + "px" || "90px"};
  height: ${(props) => props.planRad + "px" || "90px"};
  border-radius: 50%;
  top: calc(50% - ${(props) => props.planRad / 2 + "px" || "45px"});
  left: calc(50% - ${(props) => props.planRad / 2 + "px" || "45px"});
`;

const PlanetLight = styled.div`
  position: absolute;
  background: linear-gradient(
    ${(props) => props.sunDir + "deg" || "120deg"},
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.15) 50%
  );
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 0;
  left: 0;
`;

const Planet = ({ planRad, sunDir, showShadows, moveLight }) => {
  return (
    <div className="planet__self">
      <PlanetBody planRad={planRad * 2} className="planet__body">
        {showShadows ? <PlanetLight sunDir={sunDir} className="planet__shade" /> : ""}
      </PlanetBody>
    </div>
  );
};

export default React.memo(Planet);
