import React from 'react';

const Radio = ({
  name,
  title,
  // onChange
}) => {
  return (
    <li>
      <input
        id={title}
        type="radio"
        name={name}
        value={title}
        // onChange={onChange}
      />
      <label htmlFor={title}>{title}</label>
    </li>
  );
};

export default Radio;
