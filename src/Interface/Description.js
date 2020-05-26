import React from "react";
import styled from "styled-components";

const StyledPanel = styled.div`
  padding: 2rem 1.5rem;
  /* flex: 1 0 auto; */
  width: calc(100% - 3rem);
`;

const Description = () => {
  return (
    <StyledPanel className="app-ui-description">
      Description and link to wikipedia article goes here.
    </StyledPanel>
  );
};

export default Description;
