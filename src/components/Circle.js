import React from 'react';
import './css/Circle.css'

const Circle = (props) => {
  
  return (
    <div>
      <button className={props.classes} onClick={props.circleClicked}></button>
    </div>
  );
};

export default Circle;