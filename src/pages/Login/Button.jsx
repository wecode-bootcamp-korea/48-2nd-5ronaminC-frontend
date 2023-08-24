import React from 'react';
import './Button.scss';

const Button = ({ name, style }) => {
  return <button className={style}>{name}</button>;
};

export default Button;
