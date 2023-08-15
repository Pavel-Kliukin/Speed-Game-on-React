import React from 'react';
import './ModalWin.css'

// Images imports
import winGif from '../assets/win.gif'
import classified from '../assets/classified.png'

const ModalWin = (props) => {

  

  return (
    <div className='bigBox'>
      <div className="overlay">
      </div>
      <div className="modal">
        <h2 id="missionfailed">Mission completed!</h2>
        <h2 id="yourScore">You win!</h2>
        <div id="winGifBox">
          <img id="winGif" src={winGif} alt="WinGif"/>
        </div>
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
        <img id="classified" src={classified} alt="Classified"/>
      </div>
    </div>
  );
};

export default ModalWin;