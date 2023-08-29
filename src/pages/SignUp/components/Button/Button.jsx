import React from 'react';
import './Button.scss';

const Button = ({ name, buttonStyle, onClick }) => {
  return (
    <button
      type="button"
      className={`buttonComponent ${buttonStyle}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
