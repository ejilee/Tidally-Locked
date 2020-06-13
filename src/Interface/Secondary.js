import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from '../context';

const StyledPanel = styled.div`

  padding: 2rem 1.5rem;
  flex: 1 1 auto;
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.5rem;

  @media ${(props) => props.theme.threshold.tablet} {
    width: calc(50% - 3rem - 1px);
  }
  @media ${(props) => props.theme.threshold.desktop} {
    width: 100%;
  }

  .ui__options--thirdRow{

    .option__rangebar {
      width: 100%;
      display: flex;
      flex: row wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      input[type="range"] {
        width: calc(100% - 7.5rem);
      }
    }
  }
  
  .ui__options--fourthRow{
    width: 100%;
    display: flex;
    flex: row wrap;
    justify-content: flex-start;
  }
`;

const Secondary = () => {

  const { state, actions } = useContext(AppContext);
  const { orbRad, moonRad, planRad, sunDir, showShadows, showLaser } = state.appState;
  const { setOrbRad, setBodySize, setSunDirection, toggleShadows, toggleLaser } = actions;
  
  return (
    <StyledPanel className="app__ui--secondary">
      <form>
        <div className="ui__options--thirdRow">
          <div className="option__rangebar">
            <label htmlFor="orbRad">Orbit Radius</label>
            <input
              className="option__range"
              type="range"
              id="orbRad"
              name="orbRad"
              min="100"
              max="300"
              step="20"
              value={orbRad}
              onChange={(e) => {
                e.preventDefault();
                setOrbRad(Number(e.target.value));
              }}
            />
          </div>
          <div className="option__rangebar">
            <label htmlFor="orbRad">Light Angle</label>
            <input
              type="range"
              id="orbRad"
              name="orbRad"
              min="0"
              max="360"
              step="10"
              value={sunDir}
              onChange={(e) => {
                e.preventDefault();
                setSunDirection(Number(e.target.value));
              }}
            />
          </div>
          <div className="option__rangebar">
            <label htmlFor="orbRad">Earth Radius</label>
            <input
              type="range"
              id="orbRad"
              name="orbRad"
              min="50"
              max="100"
              step="5"
              value={planRad}
              onChange={(e) => {
                e.preventDefault();
                setBodySize(moonRad, Number(e.target.value));
              }}
            />
          </div>
          <div className="option__rangebar">
            <label htmlFor="orbRad">Moon Radius</label>
            <input
              type="range"
              id="orbRad"
              name="orbRad"
              min="10"
              max="50"
              step="5"
              value={moonRad}
              onChange={(e) => {
                e.preventDefault();
                setBodySize(Number(e.target.value), planRad);
              }}
            />
          </div>
        </div>
        <div className="ui__options--fourthRow">
          <div className="option__checkbox">
            <input
              type="checkbox"
              id="showShadow"
              name="showShadow"
              checked={showShadows}
              onChange={(e) => {
                toggleShadows();
              }}
            ></input>
            <label htmlFor="showShadow">Show Shadows</label>
          </div>
          <div className="option__checkbox">
            <input
              type="checkbox"
              id="moveLight"
              name="moveLight"
              checked={showLaser}
              onChange={(e) => {
                toggleLaser();
              }}
            ></input>
            <label htmlFor="moveLight">Show Laser</label>
          </div>
        </div>
      </form>
    </StyledPanel>
  );
};

export default Secondary;
