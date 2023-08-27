import React, { useState } from 'react';
import './ModalWin.css';
import WinPart1 from './WinPart1';
import WinPart2 from './WinPart2';

const ModalWin = (props) => {
  const [modalWin, setModalWin] = useState(true)
  const [modalWin2, setModalWin2] = useState(false)
  
  // This handler switches modal windows (from WinPart1 to WinPart2)
  const submitHandler = () => {
    setModalWin(false)
    setModalWin2(true)
  }

  return (
    <div className='bigBox'>
      <div className="overlayWin"></div>

      {/* This part comes first and suggests user to input his name */}
      {modalWin && <WinPart1 submitClicked={submitHandler} btnClicked={props.btnClicked}/>}
      {/* This part comes next */}
      {modalWin2 && <WinPart2 btnClicked={props.btnClicked}/>}

    </div>
  );
};

export default ModalWin;