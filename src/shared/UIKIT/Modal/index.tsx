import React from "react";
import Modal from "react-modal";

// Style
import "./index.scss";

// Assets
import CLOSE_ICON from "../../../assets/icons/close.svg";

// Style
const modalStyle = {
  content: {
    top: "54%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
  },
};

Modal.setAppElement("#root");

// Component
const ModalComponent = ({ children, isOpen, setIsOpen }: any) => {
  /* ******************************** RENDERING ******************************* */
  return (
    <Modal
      overlayClassName="modal"
      bodyOpenClassName="disable-scroll"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={modalStyle}
    >
      <div className="modal-content">
        <button
          type="button"
          className="close-modal"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="close-icon"
            style={{ width: "10px" }}
            src={CLOSE_ICON}
            alt="close"
          />
        </button>

        {children}
      </div>
    </Modal>
  );
};

export default ModalComponent;
