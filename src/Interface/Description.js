import React from "react";
import styled from "styled-components";

const StyledPanel = styled.div`
  padding: 2rem 1.5rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
`;

const Description = () => {
  return (
    <StyledPanel className="app__ui--fifthRow">
      <h1 style={{marginTop: '0'}}>Tidal Locking</h1>
      <p>
        Tidal locking occurs when an orbiting astronomical body always has
        the same face toward the object it is orbiting. This is known as
        synchronous rotation: the tidally locked body takes just as long to rotate
        around its own axis as it does to revolve around its partner.
      </p>
      <p style={{ textAlign: 'right'}}>
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
