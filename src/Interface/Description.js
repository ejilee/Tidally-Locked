import React from "react";
import styled from "styled-components";

const StyledPanel = styled.div`
  padding: 2rem 1.5rem;
  line-height: 1.5rem;

  h1 {
    font-weight: normal;
    margin: 0;
  }
  .pRightAlign {
    text-align: right;
  }
`;

const Description = () => {
  return (
    <StyledPanel className="app-ui-description">
      <h1>Tidal Locking</h1>
      <p>
        Tidal locking, in the best-known case, occurs when an orbiting
        astronomical body always has the same face toward the object it is
        orbiting. This is known as synchronous rotation: the tidally locked body
        takes just as long to rotate around its own axis as it does to revolve
        around its partner. For example, the same side of the Moon always faces
        the Earth, although there is some variability because the Moon's orbit
        is not perfectly circular.
      </p>
      <p className="pRightAlign">
        -{" "}
        <a
          href="https://en.wikipedia.org/wiki/Tidal_locking"
          target="_blank"
          rel="noopener noreferrer"
        >
          read more on Wikipedia
        </a>
      </p>
    </StyledPanel>
  );
};

export default Description;