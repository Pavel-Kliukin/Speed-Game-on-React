import React from 'react';
import './css/Lives.css'
import alive from '../assets/alive.png'
import dead from '../assets/dead.png'

const Lives = (props) => {
  return (
    <img className='lives' src={props.alive_status ? alive : dead} alt="lives"/>
  );
};

export default Lives;