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
  align-items: flex-start;
  color: ${(props) => props.theme.colors.textGray};
  transition: opacity linear 300ms;

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }

  .modal__content {
    display: block;
    z-index: 3000;
    max-width: 800px;
    margin-top: 140px;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.offWhite};
    border: 1px solid ${(props) => props.theme.colors.accentColor};
    border-radius: ${(props) => props.theme.spacing.borderRadius};
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

    .content__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 16px;

      .header__title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: normal;
      }

      .header__button {
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

    .content__body {
      line-height: 1.5rem;
    }
  }

  .modal__backdrop {
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
    setFadeType("in");
  }, []);

  // when backdrop or x is clicked...
  const closeModal = (e) => {
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
        <div className="modal__content">
          <div className="content__header">
            <h1 className="header__title">Information</h1>
            <button className="header__button" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="content__body">
            <p>
              <span className="textBoxed">tidallylocked.com</span> is a visual
              simulator for the phenomenon known as{" "}
              <span className="textAccent">tidal locking</span> which occurs
              between two astronomical bodies. Please refer to the description
              in the control panel or the wiki article linked therein for a more
              detailed definition.
            </p>
            <p>
              This web app was made in hopes of illustrating how the alignment
              of the Moon's rotational period with the orbital period results in
              the Moon perpetually facing the Earth. In the control panel, you
              can adjust the{" "}
              <span className="textAccent">rotational period</span> (the amount
              of time it takes for the moon to rotate once on it's own axis) and
              the <span className="textAccent">orbital period</span> (the amount
              the time it takes for the moon to rotate around the Earth once)
              and see whether the little triangle (consider it to be the 'nose'
              on one face of the moon) faces or doesn't face the Earth. When it
              is always facing the Earth, you will be able to see a thin red
              line that indicates that the two bodies are tidally locked.
              Imagine standing anywhere on that Earth, and you will only be able
              to see the 'nose' side of the Moon.
            </p>
            <p>
              This web app was made as a side project by Yeji Lee{" "}
              <a
                href="https://weiji.io"
                target="_blank"
                title="link to blog"
                rel="noopener noreferrer"
              >
                (link to blog)
              </a>{" "}
              in hopes of helping other people understand a concept that was
              initially difficult to understand in words only. You can go to the
              project repository{" "}
              <a
                href="https://github.com/ejilee/Tidally-Locked"
                target="_blank"
                title="link to repository"
                rel="noopener noreferrer"
              >
                (link to repo)
              </a>{" "}
              to see how it works, suggest changes, address issues or even
              contribute code! (it is built on React & styled components mostly)
              You are welcomed to use this site anytime as a reference and a
              learning tool for teaching and learning about SPACE!
            </p>
          </div>
        </div>
        <div className="modal__backdrop" onMouseDown={closeModal}></div>
      </StyledModal>,
      modalDom
    );
  } else return null;
};

export default Modal;
