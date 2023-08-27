import React from 'react';
import './css/Looser.css';
import fingerIMG from '../assets/finger.png'
import looIMG from '../assets/007loose.png'
import serIMG from '../assets/SER.png'

const Looser = () => {
  return (
    <div id="looser">
      <img className="looserImg" id="fingerIMG" src={fingerIMG} alt="Finger"/>
      <img className="looserImg" id="looIMG" src={looIMG} alt="loo"/>
      <img className="looserImg" id="serIMG" src={serIMG} alt="ser"/>
    </div>
  );
};

export {Looser};