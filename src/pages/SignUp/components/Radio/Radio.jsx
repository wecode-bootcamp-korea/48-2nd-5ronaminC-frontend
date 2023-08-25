import React from 'react';

const Radio = ({ name, title }) => {
  return (
    <li>
      <input type="radio" name={name} />
      <label>{title}</label>
    </li>
  );
};

export default Radio;
