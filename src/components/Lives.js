import React from 'react';
import './Lives.css'
import alive from '../assets/alive.png'
import dead from '../assets/dead.png'

const Lives = (props) => {
  return (
    <img className='lives' src={props.condition ? alive: dead} alt={props.condition}/>
  );
};

export default Lives;