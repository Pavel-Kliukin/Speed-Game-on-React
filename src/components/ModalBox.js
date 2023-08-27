import React from 'react';
import './css/ModalBox.css';

const ModalBox = ({children}) => {

  return (
    <div className='ModalBox'>
      <div className="overlay"></div>
      <div className="modal">
        {children}
      </div>
    </div>
  );
};

export { ModalBox };
