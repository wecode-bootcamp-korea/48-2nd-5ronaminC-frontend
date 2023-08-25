import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="main">
      <div className="left">
        <div className="logo">
          <img
            src="https://kr.accounts.ikea.com/resources/static/logo.svg"
            alt="5KEA logo"
          />
        </div>
        <div className="title">
          <h1>로그인</h1>
          <p>이케아 패밀리를 위한 쇼룸을 만나보세요!</p>
        </div>
        <div className="info">
          <div>
            <span>5KEA.kr - </span>
            <a href="https://www.ikea.com/kr/ko/customer-service/cookie-policy/">
              쿠키정책
            </a>{' '}
            <span>,</span>
            <a href="https://www.ikea.com/kr/ko/customer-service/privacy-policy/privacy-policy-pub20a57ecd">
              개인정보처리방침
            </a>
          </div>
          <div>
            <span>© Inter IKEA Systems B.V. 1999-2023</span>
          </div>
        </div>
      </div>
      <div className="right">
        <form className="userInput">
          <Input className="email" title="이메일" type="text" />
          <Input className="password" title="비밀번호" type="password" />
          <div className="buttonWrap">
            <Button name="로그인" style="blue" linkFunction={goToMain} />
            <Button name="회원가입" style="white" linkFunction={goToSignUp} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
