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
  padding: 24px;
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
    max-width: 800px;
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
            <h1 className="header-title">Information</h1>
            <button className="header-button" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="box-body">
            <p>
              [ tidallylocked.com ] is a visual simulator for the phenomenon
              known as 'tidal locking' which can occur between two astronomical
              bodies. It occurs when the amount of time it takes for a moon to
              revolve around a planet is the same as the amount of time it takes
              for it to rotate on it's own axis. When this happens, the moon
              appears to be 'facing' the planet with one side all the time. This
              is why we can only observe one side of the Moon from the Earth.
            </p>
            <p>
              This web app was made with hopes of making the relationship
              between the rotational period and the orbital period visually
              clearer to see. You can adjust the rotational period (the amount
              of time it takes for the moon to rotate once on it's own axis) and
              the orbital period (the amount the time it takes for the moon to
              rotate around the Earth once) and see whether the little triangle
              (consider it like a 'nose' on one face of the moon) faces or
              doesn't face the Earth. When it is always facing the Earth, you
              will be able to see a thin red line that indicates that the two
              bodies are tidally locked. Imagine standing anywhere on that
              Earth, and you will only be able to see the 'nose' side of the
              Moon.
            </p>
            <p>
              This web app was made as a side project by{" "}
              <a
                href="https://weiji.io"
                target="_blank"
                title="link to blog"
                rel="noopener noreferrer"
              >
                Yeji Lee
              </a>{" "}
              in hopes of helping other people understand a concept that was
              difficult for her to understand without visual guidance. You can
              go to the project{" "}
              <a
                href="https://github.com/ejilee/Tidally-Locked"
                target="_blank"
                title="link to repository"
                rel="noopener noreferrer"
              >
                repository
              </a>{" "}
              to see how it works, suggest changes (always welcomed and always
              helpful), address issues or even contribute code! You are welcomed
              to use this site anytime as a reference and a learning tool for
              teaching and learning about SPACE!
            </p>
          </div>
        </div>
        <div className="box-backdrop" onMouseDown={closeModal}></div>
      </StyledModal>,
      modalDom
    );
  } else return null;
};

export default Modal;
