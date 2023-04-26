import React from 'react';
import './Modal.css'

// Images imports
import fingerIMG from '../assets/finger.png'
import looIMG from '../assets/007loose.png'
import serIMG from '../assets/SER.png'
import classified from '../assets/classified.png'

const Modal = (props) => {
  return (
    <div className="overlay">
    <div className="modal">
      <h2 id="missionfailed">Mission failed</h2>
      <p id="yourScore"></p>
      <p>
        Try one more time
      </p>
      <div id="looser">
        <img className="looserImg" id="fingerIMG" src={fingerIMG} alt="Finger"/>
        <img className="looserImg" id="looIMG" src={looIMG} alt="loo"/>
        <img className="looserImg" id="serIMG" src={serIMG} alt="ser"/>
      </div>
      <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
      <img id="classified" src={classified} alt="Classified"/>
    </div>
  </div>
  );
};

export default Modal;