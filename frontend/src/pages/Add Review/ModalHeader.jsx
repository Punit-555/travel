import React from 'react'
import close from "../../assets/img/close.svg";

const ModalHeader = ({ setModal }) => {
    
  return (
  <>
      <div className="modal-header">
            <span className="close">
              <img
                src={close}
                alt="Close"
                onClick={() => {
                  setModal(false);
                }}
              />
            </span>
            <h2>Add a review</h2>
          </div>
  </>
  )
}

export default ModalHeader;
