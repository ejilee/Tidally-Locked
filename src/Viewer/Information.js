import React, { useState } from "react";
import styled from "styled-components";
import infoIcon from "./infoIcon.svg";
import Modal from "./Modal";

const StyledBtn = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  padding: 0;
  overflow: hidden;
  outline: none;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  margin: 16px;
  opacity: 0.8;
  transition: opacity 200ms;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Information = () => {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(!modalState);
  };
  return (
    <div>
      <StyledBtn onClick={toggleModal} className="fab__info">
        <img src={infoIcon} className="fab__info__icon" alt="click for more information" />
      </StyledBtn>
      {modalState ? (
        <Modal modalState={modalState} toggleModal={toggleModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Information;
