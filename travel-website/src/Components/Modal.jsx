import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;


  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
