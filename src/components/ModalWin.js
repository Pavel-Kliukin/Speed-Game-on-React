import React, { useState } from 'react';
import './ModalWin.css';
import WinPart1 from './WinPart1';
import WinPart2 from './WinPart2';

const ModalWin = (props) => {
  const [modalWin, setModalWin] = useState(true)
  const [modalWin2, setModalWin2] = useState(false)
  
  const submitHandler = () => {
    setModalWin(false)
    setModalWin2(true)
  }

  return (
    <div className='bigBoxWin'>
      <div className="overlayWin"></div>

      {modalWin && <WinPart1 submitClicked={submitHandler} btnClicked={props.btnClicked}/>}
      {modalWin2 && <WinPart2 btnClicked={props.btnClicked}/>}

    </div>
  );
};

export default ModalWin;