import React from 'react';
import './ModalLose.css'

// Images imports
import fingerIMG from '../assets/finger.png'
import looIMG from '../assets/007loose.png'
import serIMG from '../assets/SER.png'
import classified from '../assets/classified.png'

const less10 = [
  'Is that all you can?',
  'You are an easy target!',
  'Try harder!',
  'Are you the real James Bond?!'
]
const less20 = [
  'You are good, but can be better!',
  'Try one more time'
]
const less30 = [
  'You almost done it!',
  'You were so close to win!',
  'The final boss killed you :)'
]

const text = (score) => {
  if (score <= 10){
    return less10[Math.floor(Math.random() * less10.length)]
   } else if ((10 < score && score <= 20)) {
    return less20[Math.floor(Math.random() * less20.length)]
   } else if ((score < 30)) {
    return less20[Math.floor(Math.random() * less30.length)]
   }
}

const ModalLose = (props) => {

  

  return (
    <div className="overlay">
    <div className="modal">
      <h2 id="missionfailed">Mission failed</h2>
      {/* <p>You need 30 points to win</p> */}
      <h2 id="yourScore">Your score: {props.score}</h2>
      <p>
        {text(props.score)}
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

export default ModalLose;