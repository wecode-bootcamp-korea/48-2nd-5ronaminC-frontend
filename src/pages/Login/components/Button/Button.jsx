import React from 'react';
import './Button.scss';

const Button = ({ name, buttonStyle, linkFunction, validation = true }) => {
  return (
    <button
      className={`buttonComponent ${buttonStyle}`}
      onClick={linkFunction}
      disabled={!validation}
    >
      {name}
    </button>
  );
};

export default Button;
