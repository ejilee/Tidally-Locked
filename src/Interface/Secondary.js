import React, { useState } from "react";
import styled from "styled-components";

const StyledPanel = styled.div`
  padding: 2rem 1.5rem;
  flex: 1 1 auto;
  width: calc(100% - 3rem);
  font-size: 0.9rem;
  line-height: 1.5rem;
  @media ${(props) => props.theme.threshold.tablet} {
    width: calc(50% - 3rem - 1px);
  }
  @media ${(props) => props.theme.threshold.desktop} {
    width: calc(100% - 3rem);
  }

  .option {
    width: 100%;
    display: flex;
    flex: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
      margin-top: 2rem;
    }

    label {
      width: 7rem;
    }
    input[type="range"] {
      width: calc(100% - 7.5rem);
    }

    .option__check {
      text-align: left;
    }

    .option__check input[type="checkbox"] {
      opacity: 0;
    }

    .option__check label {
      position: relative;
      display: inline-block;
      padding-left: 1.8rem;
    }

    .option__check label::before,
    .option__check label::after {
      position: absolute;
      content: "";
      /*Needed for the line-height to take effect*/
      display: inline-block;
    }

    /*Outer box of the fake checkbox*/
    .option__check label::before {
      height: 20px;
      width: 20px;
      background-color: ${(props) => props.theme.colors.offWhite};
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
      border-radius: 2px;
      left: 0px;

      /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
        *to vertically center it.
        */
      top: 3px;
    }

    /*Checkmark of the fake checkbox*/
    .option__check label::after {
      height: 6px;
      width: 10px;
      border-left: 2px solid #222;
      border-bottom: 2px solid #222;

      transform: rotate(-45deg);

      left: 4px;
      top: 7px;
    }

    /*Hide the checkmark by default*/
    .option__check input[type="checkbox"] + label::after {
      content: none;
    }

    /*Unhide on the checked state*/
    .option__check input[type="checkbox"]:checked + label::after {
      content: "";
    }

    /*Adding focus styles on the outer-box of the fake checkbox*/
    .option__check input[type="checkbox"]:focus + label::before {
      outline: 2px solid ${(props) => props.theme.colors.accentColor};
    }
  }
`;

const Secondary = ({ orbRad, setOrbRad }) => {
  //   const [orbRad, setOrbRad] = useState(200);

  const handleRangeChange = () => {};

  return (
    <StyledPanel className="app-ui-secondary">
      <form className="secondaryOptions">
        <div className="option">
          <label htmlFor="orbRad">Orbit Radius</label>
          <input
            type="range"
            id="orbRad"
            name="orbRad"
            min="100"
            max="300"
            step="20"
            value={orbRad}
            onChange={(e) => setOrbRad(Number(e.target.value))}
          />
        </div>
        <div className="option">
          <label htmlFor="orbRad">Light Angle</label>
          <input
            type="range"
            id="orbRad"
            name="orbRad"
            min="100"
            max="300"
            step="20"
            value={orbRad}
            onChange={(e) => setOrbRad(Number(e.target.value))}
          />
        </div>
        <div className="option">
          <label htmlFor="orbRad">Earth Radius</label>
          <input
            type="range"
            id="orbRad"
            name="orbRad"
            min="100"
            max="300"
            step="20"
            value={orbRad}
            onChange={(e) => setOrbRad(Number(e.target.value))}
          />
        </div>
        <div className="option">
          <label htmlFor="orbRad">Moon Radius</label>
          <input
            type="range"
            id="orbRad"
            name="orbRad"
            min="100"
            max="300"
            step="20"
            value={orbRad}
            onChange={(e) => setOrbRad(Number(e.target.value))}
          />
        </div>
        <div className="option">
          <div className="option__check">
            <input
              type="checkbox"
              id="showShadow"
              name="showShadow"
              value="showShadow"
            ></input>
            <label htmlFor="showShadow">Show Shadows</label>
          </div>
          <div className="option__check">
            <input
              type="checkbox"
              id="moveLight"
              name="moveLight"
              value="moveLight"
            ></input>
            <label htmlFor="moveLight">Move Light</label>
          </div>
        </div>
      </form>
    </StyledPanel>
  );
};

export default Secondary;
