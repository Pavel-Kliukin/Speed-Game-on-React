import React from 'react';
import './ModalWin.css'

// Images imports
import winGif from '../assets/win.gif'

const ModalWin = (props) => {

  

  return (
    <div className='bigBoxWin'>
      <div className="overlayWin">
      </div>
      <div className="modalWin">
        <h2 id="missioncompleted">Mission completed!</h2>
        <h2 id="youWin">You win!</h2>
        <div id="winGifBox">
          <img id="winGif" src={winGif} alt="WinGif"/>
        </div>
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
        <form>
          <label>Enter your name</label>
          <input></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWin;