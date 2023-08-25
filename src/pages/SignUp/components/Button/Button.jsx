import React from 'react';
import './Button.scss';

const Button = ({ name, style, goToLink, navigate }) => {
  return (
    <button
      className={`buttonComponent ${style}`}
      onClick={() => navigate({ goToLink })}
    >
      {name}
    </button>
  );
};

export default Button;
