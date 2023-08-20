import React, { useState } from 'react';
import './ModalWin.css'

// Images imports
import winGif from '../assets/win.gif'
import leftClapingHands from '../assets/LClapingHands.gif'
import rightClapingHands from '../assets/RClapingHands.gif'
import topSecret from '../assets/topSecret.png'

const ModalWin = (props) => {
  const [modalWin, setModalWin] = useState(true)
  const [modalWin2, setModalWin2] = useState(false)
  
  const submitHandler = (e) => {
    e.preventDefault();

  }

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
          <form onSubmit={submitHandler}>
              <label>Enter your name:</label>
              <input type="text" required></input>
            <button>Submit</button>
          </form>
          <img className='hands' id="rightClapingHands" src={rightClapingHands} alt="rightClapingHands"/>
        </div>
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
      </div>
      
      <div className="modalWin2">
        <div className='sorryWeCant'>
          <h1 id="missioncompleted">Sorry!</h1>
          <h2 id="youWin">We can't post your name, because this mission is</h2>
        </div>
        <img id="topSecretEnd" src={topSecret} alt="Top Secret"/>
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
      </div>

    </div>
  );
};

export default ModalWin;