import React from 'react';
import './Input.scss';

const Input = ({
  className,
  name,
  title,
  type,
  placeholder,
  maxLength,
  getFunction,
}) => {
  return (
    <div className={`${className} wrap`}>
      <label>{title}</label>
      <div className="inputWrap">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          maxlength={maxLength}
          onChange={getFunction}
        />
        {type === 'password' && (
          <img
            className="showPasswordIcon"
            src="/images/hide.png"
            alt="비밀번호 보이기"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
