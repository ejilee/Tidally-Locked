import React from "react";
import styled from "styled-components";
import symDec from "./symDec.svg";
import symInc from "./symInc.svg";
import lockIcon_on from "./lockIcon_on.svg";
import lockIcon_off from "./lockIcon_off.svg";

const StyledPanel = styled.div`
  padding: 2rem 1.5rem;
  flex: 1 1 auto;
  width: calc(100% - 3rem);
  min-width: 336px;
  line-height: 1.5rem;
  @media ${(props) => props.theme.threshold.tablet} {
    width: calc(50% - 3rem - 1px);
  }
  @media ${(props) => props.theme.threshold.desktop} {
    width: calc(100% - 3rem);
  }

  .option__firstRow {
    width: 100%;
    display: flex;
    flex: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .option__secondRow {
    width: 100%;
    display: flex;
    flex: row nowrap;
    justify-content: space-between;

    button {
      height: 40px;
      width: 30%;
      background-color: ${(props) => props.theme.colors.uiGray};
      border: none;
      border-radius: 6px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
      color: ${(props) => props.theme.colors.offWhite};
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      cursor: pointer;
      &:focus {
        border: 2px solid ${(props) => props.theme.colors.accentColor};
      }
    }
  }

  .option__indicator--tidLock {
    width: 24px;
    height: 24px;
    align-self: flex-end;
    margin-bottom: 1.75rem;
  }

  .option__number {
    display: inline-block;

    label {
      width: 7rem;
    }

    .number__input {
      display: flex;
      flex: row nowrap;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0.5rem;

      input[type="number"] {
        width: 100px;
        height: 50px;
        background-color: ${(props) => props.theme.colors.offWhite};
        color: ${(props) => props.theme.colors.textGray};
        font-size: 2.25rem;
        text-align: center;
        border: none;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      }
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      /* Firefox */
      input[type="number"] {
        -moz-appearance: textfield;
      }
    }

    .number__control {
      display: flex;
      flex-flow: column;
      margin: 0 0 0 0.5rem;
      padding: 0;
      .btn__inc,
      .btn__dec {
        width: 32px;
        height: 32px;
        background-color: ${(props) => props.theme.colors.uiGray};
        border-radius: 16px;
        border: none;
        color: ${(props) => props.theme.colors.offWhite};
        font-size: 2rem;
        line-height: 0;
        font-weight: normal;
        overflow: hidden;
        margin: 0%;
        cursor: pointer;

        img {
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          margin: 2px;
        }
      }
      .btn__inc {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const Primary = ({
  rotPer,
  orbPer,
  tidLock,
  paused,
  setRotOrbPer,
  resetAll,
  pauseAll,
  resumeAll,
  forceLock,
}) => {
  return (
    <StyledPanel className="app-ui-primary">
      <form
        className="primaryOptions"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="option option__firstRow">
          <div className="option option__number">
            <label htmlFor="rotPer">Rotational Period</label>
            <div className="number__input">
              <input
                type="number"
                id="rotPer"
                name="rotPer"
                min="1"
                max="100"
                value={rotPer}
                onChange={(e) => {
                  e.preventDefault();
                  setRotOrbPer(Number(e.target.value), orbPer);
                }}
              />
              <div className="number__control">
                <button
                  className="btn__inc"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(Number(rotPer + 1), orbPer);
                  }}
                >
                  <img
                    src={symInc}
                    className="btnIncImg"
                    alt="click to increment by one"
                  />
                </button>
                <button
                  className="btn__dec"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(Number(rotPer - 1), orbPer);
                  }}
                >
                  <img
                    src={symDec}
                    className="btnDecImg"
                    alt="click to decrement by one"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="option__indicator--tidLock">
            {tidLock ? (
              <img
                src={lockIcon_on}
                className="lockIcon lockIcon--on"
                alt="status currently IS tidal locked"
              />
            ) : (
              <img
                src={lockIcon_off}
                className="lockIcon lockIcon--off"
                alt="status currently NOT tidal locked"
              />
            )}
          </div>
          <div className="option option__number">
            <label htmlFor="orbPer">Orbital Period</label>
            <div className="number__input">
              <input
                type="number"
                id="orbPer"
                name="orbPer"
                min="1"
                max="100"
                value={orbPer}
                onChange={(e) => {
                  e.preventDefault();
                  setRotOrbPer(rotPer, Number(e.target.value));
                }}
              />
              <div className="number__control">
                <button
                  className="btn__inc"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(rotPer, Number(orbPer + 1));
                  }}
                >
                  <img
                    src={symInc}
                    className="btnIncImg"
                    alt="click to increment by one"
                  />
                </button>
                <button
                  className="btn__dec"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(rotPer, Number(orbPer - 1));
                  }}
                >
                  <img
                    src={symDec}
                    className="btnDecImg"
                    alt="click to decrement by one"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="option option__secondRow">
          <button
            onClick={(e) => {
              e.preventDefault();
              resetAll();
            }}
          >
            RESET
          </button>
          {paused ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                resumeAll();
              }}
            >
              RESUME
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                pauseAll();
              }}
            >
              PAUSE
            </button>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              forceLock();
            }}
          >
            FORCE
          </button>
        </div>
      </form>
    </StyledPanel>
  );
};

export default Primary;
