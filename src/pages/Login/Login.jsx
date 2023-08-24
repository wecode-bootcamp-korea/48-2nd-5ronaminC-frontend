import React from 'react';
import './Login.scss';
import Button from './components/Button';

const Login = () => {
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
          <div className="email">
            <label>이메일</label>
            <div className="inputWrap">
              <input type="text" />
            </div>
          </div>
          <div className="password">
            <label>비밀번호</label>
            <div className="inputWrap">
              <input type="password" />
              <img
                className="showPasswordIcon"
                src="/images/hide.png"
                alt="비밀번호 보이기"
              />
            </div>
          </div>
          <div className="buttonWrap">
            <Button name="로그인" style="blue" />
            <Button name="회원가입" style="white" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
