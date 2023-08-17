import React from 'react';
import './ModalWin.css'

// Images imports
import winGif from '../assets/win.gif'
import leftClapingHands from '../assets/LClapingHands.gif'
import rightClapingHands from '../assets/RClapingHands.gif'

const ModalWin = (props) => {

  

  return (
    <div className='bigBoxWin'>
      <div className="overlayWin"></div>
      <div className="modalWin">
        <div className='congrats'>
          <h2 id="missioncompleted">Mission completed!</h2>
          <h2 id="youWin">You win!</h2>
        </div>
        <img id="winGif" src={winGif} alt="WinGif"/>
        <div className='buttomBox'>
          <img className='hands' id="leftClapingHands" src={leftClapingHands} alt="leftClapingHands"/>
          <form>
              <label>Enter your name:</label>
              <input></input>
            <button>Submit</button>
          </form>
          <img className='hands' id="rightClapingHands" src={rightClapingHands} alt="rightClapingHands"/>
        </div>
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
      </div>
    </div>
  );
};

export default ModalWin;