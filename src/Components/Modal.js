import './Modal.css';
import {useState} from "react";
import popUp from "./PopUp";
import BackDrop from "./BackDrop";

const Modal = () => {
    const [modal, setModal] =useState(false);

    const closeHandler = () => {
      setModal(false);
    }

    const openModal = () => {
      setModal(true);
    }

  return(
      <div className='modal'>
          <div>
              <button className='btn' onClick={openModal}>Show popup</button>
          </div>
          {modal && (<popUp onCancel={closeHandler} onConfirm={closeHandler} />)}
          {modal && (<BackDrop onCancel={closeHandler}/>)}
      </div>
  )
}

export default Modal;