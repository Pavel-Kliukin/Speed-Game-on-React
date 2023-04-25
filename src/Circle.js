import React from 'react';
import './Circle.css'

const Circle = (props) => {
  return (
    <div>
      <button className="circles" id="c1">{props.number}</button>
    </div>
  );
};

export default Circle;