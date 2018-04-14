import React from 'react';
import PropTypes from 'prop-types';

/*  Modal functionality adapted from:
    https://daveceddia.com/open-modal-in-react */

const ModalDialogue = ({ children, closeModal }) => {
  const modalBackgroundStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(5,5,5, 0.3)',
    zIndex: 1000,
    padding: 50
  };

  const modalContentStyle = {
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
  };

  return (
    <div className="modal-dialogue" style={modalBackgroundStyle}>
      <div className="callout" style={modalContentStyle}>
        <button
          className="close-button"
          onClick={closeModal}
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
};

ModalDialogue.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default ModalDialogue;
