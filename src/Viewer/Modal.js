import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  z-index: 3000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.textGray};
  transition: opacity linear 300ms;

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }

  .box-wrapper {
    display: block;
    z-index: 3000;
    width: 600px;
    max-width: calc(100% - 96px);
    padding: 16px;
    background-color: ${(props) => props.theme.colors.offWhite};
    border: 1px solid ${(props) => props.theme.colors.accentColor};
    border-radius: ${(props) => props.theme.spacing.borderRadius};
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

    .box-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 16px;

      .header-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: normal;
      }

      .header-button {
        background-color: Transparent;
        background-repeat: no-repeat;
        border: none;
        padding: 0;
        outline: none;
        width: 32px;
        height: 32px;
        cursor: pointer;
        margin: 0 0 0 16px;
        font-size: 2rem;
        transition: color 300ms;
        cursor: pointer;
        &:hover {
          color: ${(props) => props.theme.colors.accentColor};
        }
      }
    }
  }

  .box-backdrop {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 2000;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
`;

const Modal = ({ modalState, toggleModal }) => {
  const modalDom = document.getElementById("modal");
  const [fadeType, setFadeType] = useState("out");

  // when component mounts...
  useEffect(() => {
    console.log("modal mounted, fading in");
    setFadeType("in");
  }, []);

  // when backdrop or x is clicked...
  const closeModal = (e) => {
    console.log("closing modal, fading out");
    e.preventDefault();
    setFadeType("out");
  };

  // after each opacity transition ends w/'out' on modal container...
  const doAfterFade = (e) => {
    if (e.propertyName !== "opacity" || fadeType === "in") {
      return;
    } else if (fadeType === "out") {
      toggleModal();
    }
  };

  if (modalDom && modalState) {
    return ReactDOM.createPortal(
      <StyledModal
        role="dialog"
        className={fadeType === "in" ? "fade-in" : "fade-out"}
        onTransitionEnd={doAfterFade}
      >
        <div className="box-wrapper">
          <div className="box-header">
            <h1 className="header-title">So... What is This?</h1>
            <button className="header-button" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="box-body">
            [ tidallylocked.com ] is a visual simulator for the phenomenon known
            as 'tidal locking' which occurs between two astronomical bodies.
            This website was made as a side project by Yeji Lee [ weiji.io ].
            Made with React. You are welcomed to use this site as a reference
            and a learning tool for teaching and learning about SPACE!
          </div>
        </div>
        <div className="box-backdrop" onMouseDown={closeModal}></div>
      </StyledModal>,
      modalDom
    );
  } else return null;
};

export default Modal;
