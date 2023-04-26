import React from 'react';
import './Circle.css'

const Circle = (props) => {
  
  return (
    <div>
      <button className={props.classes}>{props.number}</button>
    </div>
  );
};

export default Circle;