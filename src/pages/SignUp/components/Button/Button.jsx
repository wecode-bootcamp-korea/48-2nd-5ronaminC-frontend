import React from 'react';
import './Button.scss';

const Button = ({ name, buttonStyle, goToLink, navigate }) => {
  return (
    <button
      className={`buttonComponent ${buttonStyle}`}
      onClick={() => navigate({ goToLink })}
    >
      {name}
    </button>
  );
};

export default Button;
