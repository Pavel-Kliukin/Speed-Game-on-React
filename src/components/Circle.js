import React from 'react';
import './Circle.css'

const Circle = (props) => {
  
  return (
    <div>
      <button className={props.classes} onClick={props.circleClicked}></button>
    </div>
  );
};

export default Circle;