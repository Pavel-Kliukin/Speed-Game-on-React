import React, { useState } from 'react';
import WinPart1 from './WinPart1';
import WinPart2 from './WinPart2';
import { ModalBox } from './ModalBox';

const WinAlert = (props) => {
  const [modalWin, setModalWin] = useState(true)
  const [modalWin2, setModalWin2] = useState(false)
  
  // This handler switches modal windows (from WinPart1 to WinPart2)
  const submitHandler = () => {
    setModalWin(false)
    setModalWin2(true)
  }

  return (
    <ModalBox>
      {/* This part comes first and suggests user to input his name */}
      {modalWin && <WinPart1 submitClicked={submitHandler} btnClicked={props.btnClicked}/>}
      {/* This part comes next */}
      {modalWin2 && <WinPart2 btnClicked={props.btnClicked}/>}
    </ModalBox>
  );
};

export {WinAlert};