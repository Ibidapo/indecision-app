import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <div>
    <Modal
      isOpen={!!props.isModalOpen}
      onRequestClose={props.handleCloseModal}
      handleCloseModal={props.handleCloseModal}
      contentLabel="Selected Option"
      closeTimeoutMS={400}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.isModalOpen && <p className="modal__body">{props.isModalOpen}</p>}
      <button className="button" onClick={props.handleCloseModal}>Okay</button>
    </Modal>
  </div>
);

export default OptionModal;
