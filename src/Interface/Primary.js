import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from '../context';
import symDec from "./symDec.svg";
import symInc from "./symInc.svg";
import lockIcon_on from "./lockIcon_on.svg";
import lockIcon_off from "./lockIcon_off.svg";

const StyledPanel = styled.div`

  padding: 2rem 1.5rem;
  flex: 1 1 auto;
  width: 100%;
  line-height: 1.5rem;

  @media ${(props) => props.theme.threshold.tablet} {
    width: calc(50% - 3rem - 1px);
  }
  @media ${(props) => props.theme.threshold.desktop} {
    width: 100%;
  }

  .ui__options--firstRow {
    width: 100%;
    display: flex;
    flex: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    .option__number {
      display: inline-block;

      label {
        width: 7rem;
      }

      .number__wrapper {
        display: flex;
        flex: row nowrap;
        justify-content: flex-start;
        align-items: center;
        margin-top: 0.5rem;

        .number__box {
          width: 100px;
          height: 50px;
          background-color: ${(props) => props.theme.colors.offWhite};
          color: ${(props) => props.theme.colors.textGray};
          font-size: 2.25rem;
          text-align: center;
          border: none;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
          @media ${(props) => props.theme.threshold.mobile} {
            width: 80px;
          }
        }

        .number__control {
          display: flex;
          flex-flow: column;
          margin: 0 0 0 0.5rem;
          padding: 0;

          .control__button {
            font-size: 0;
            width: 32px;
            height: 32px;
            background-color: ${(props) => props.theme.colors.uiGray};
            border-radius: 16px;
            border: none;
            line-height: 0;
            overflow: hidden;
            margin: 0;
            cursor: pointer;

            img {
              width: 16px;
              height: 16px;
              margin: 2px;
            }

            &:last-child {
              margin-top: 0.5rem;
            }
          }

        }
      }
    }

    .option__indicator {
      width: 24px;
      height: 24px;
      align-self: flex-end;
      margin-bottom: 1.75rem;

      @media (max-width: 360px) {
        display: none;
      }

      @media (min-width: 361px) {
        display: block;
      }
    }
  }

  .ui__options--secondRow {
    width: 100%;
    display: flex;
    flex: row nowrap;
    justify-content: space-between;

    .option__button {
      padding: 0;
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
`;

const Primary = () => {

  const { state, actions } = useContext(AppContext);
  const { rotPer, orbPer, tidLock, paused } = state.appState;
  const { setRotOrbPer, resetAll, pauseAll, resumeAll, forceLock } = actions;

  return (
    <StyledPanel className="app__ui--primary">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="ui__options--firstRow">
          <div className="option__number">
            <label htmlFor="rotPer">Rotational Period</label>
            <div className="number__wrapper">
              <input
                className="number__box"
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
                  className="control__button"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(Number(rotPer + 1), orbPer);
                  }}
                >
                  <img
                    src={symInc}
                    alt="click to increment by one"
                  />
                </button>
                <button
                  className="control__button"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(Number(rotPer - 1), orbPer);
                  }}
                >
                  <img
                    src={symDec}
                    alt="click to decrement by one"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="option__indicator">
            {tidLock ? (
              <img
                src={lockIcon_on}
                className="option__indicator__img--on"
                alt="status currently IS tidal locked"
              />
            ) : (
              <img
                src={lockIcon_off}
                className="option__indicator__img--off"
                alt="status currently NOT tidal locked"
              />
            )}
          </div>
          <div className="option__number">
            <label htmlFor="orbPer">Orbital Period</label>
            <div className="number__wrapper">
              <input
                className="number__box"
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
                  className="control__button"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(rotPer, Number(orbPer + 1));
                  }}
                >
                  <img
                    src={symInc}
                    alt="click to increment by one"
                  />
                </button>
                <button
                  className="control__button"
                  onClick={(e) => {
                    e.preventDefault();
                    setRotOrbPer(rotPer, Number(orbPer - 1));
                  }}
                >
                  <img
                    src={symDec}
                    alt="click to decrement by one"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ui__options--secondRow">
          <button
            className="option__button"
            onClick={(e) => {
              e.preventDefault();
              resetAll();
            }}
          >
            RESET
          </button>
          {paused ? (
            <button
              className="option__button"
              onClick={(e) => {
                e.preventDefault();
                resumeAll();
              }}
            >
              RESUME
            </button>
          ) : (
            <button
              className="option__button"
              onClick={(e) => {
                e.preventDefault();
                pauseAll();
              }}
            >
              PAUSE
            </button>
          )}
          <button
            className="option__button"
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
