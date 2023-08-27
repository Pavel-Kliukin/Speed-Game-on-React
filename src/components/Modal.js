import React, { useState } from 'react';
import './ModalWin.css';
import WinPart1 from './WinPart1';
import WinPart2 from './WinPart2';

const ModalWin = () => {

  return (
    <div className='bigBox'>
      <div className="overlayWin"></div>
    </div>
  );
};

export default ModalWin;