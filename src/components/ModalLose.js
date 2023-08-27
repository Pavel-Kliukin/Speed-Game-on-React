import React from 'react';
import './ModalLose.css';

// Images imports
import classified from '../assets/classified.png';
import { Blood } from './Blood.js';
import { Looser } from './Looser';


const ModalLose = (props) => {

  // Messages for loosers
const less10 = [
  'Is that all you can?',
  'You are an easy target!',
  'Try harder!',
  'Are you the real James Bond?!'
]
const less20 = [
  'You are good, but can be better!',
  'Try one more time',
  "Don't give up! Try again!",
]
const less30 = [
  'You almost did it!',
  'You were so close to win!',
  'The final boss killed you :)',
  'Focus! Try again!',
  'Better luck next time',
  'Almost won!',
  'You need 30 points, remember?!'
]

const text = (score) => {
  if (score <= 10){
    return less10[Math.floor(Math.random() * less10.length)]
   } else if ((10 < score && score <= 20)) {
    return less20[Math.floor(Math.random() * less20.length)]
   } else if ((score < 30)) {
    return less30[Math.floor(Math.random() * less30.length)]
   }
}
  
  return (
    <div className='bigBox'>
      <div className="overlay"></div>
      <div className="modal">
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
        <img id="classified" src={classified} alt="Classified"/>
        <div className='textBox'>
          <h2 id="missionfailed">Mission failed</h2>
          {/* <p>You need 30 points to win</p> */}
          <h2 id="yourScore">Your score: {props.score}</h2>
          <p>
            {text(props.score)}
          </p>
        </div>
        {/* Randomly addes Looser or Blood modules */}
        {Math.floor(Math.random() * 2) ? <Looser /> : <Blood />}
      </div>
    </div>
  );
};

export default ModalLose;