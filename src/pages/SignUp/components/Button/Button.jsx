import React from 'react';
import './Button.scss';

const Button = ({ name, buttonStyle, onClick, validation = true }) => {
  return (
    <button
      type="button"
      className={`buttonComponent ${buttonStyle}`}
      onClick={onClick}
      disabled={!validation}
    >
      {name}
    </button>
  );
};

export default Button;
