import React from 'react';

const Radio = ({ name, title, radioId }) => {
  return (
    <li>
      <input id={title} type="radio" name={name} value={radioId} />
      <label htmlFor={title}>{title}</label>
    </li>
  );
};

export default Radio;
