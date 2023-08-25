import React from 'react';
import './Button.scss';

const Button = ({ name, style, linkFunction }) => {
  return (
    <button className={`buttonComponent ${style}`} onClick={linkFunction}>
      {name}
    </button>
  );
};

export default Button;
