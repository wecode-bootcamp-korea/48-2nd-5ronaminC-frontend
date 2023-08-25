import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const isPassword = true;

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
          <h1>5KEA FAMILY 회원가입</h1>
          <div className="description">
            <p>이케아 패밀리가 되어 다양한 쇼룸을 만나보세요!</p>
            <span>이미 이케아 패밀리신가요?</span>
            <span className="goToLogin" onClick={() => navigate('/')}>
              로그인하기
            </span>
          </div>
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
          <Input
            className="email"
            title="이메일"
            type="text"
            placeholder="5KEA@naver.com"
            maxLength="30"
          />
          <Input
            className="password"
            title="비밀번호"
            type="password"
            placeholder="소문자,대문자,특수기호 포함 8자리 이상"
            maxLength="30"
            isPassword={isPassword}
          />
          <Input
            className="name"
            title="이름"
            type="text"
            placeholder="오케아"
          />
          <Input
            className="birthday"
            title="생년월일"
            type="text"
            placeholder="20230513"
            maxlength="8"
          />
          <Input
            className="phoneNumber"
            title="전화번호"
            type="number"
            placeholder="01012345678"
            maxlength="11"
          />

          <div className="gender wrap">
            <label>성별</label>
            <ul className="radioWrap">
              <li>
                <input type="radio" name="gender" />
                <label>남자</label>
              </li>
              <li>
                <input type="radio" name="gender" />
                <label>여자</label>
              </li>
              <li>
                <input type="radio" name="gender" />
                <label>응답안함</label>
              </li>
            </ul>
          </div>

          <Input
            className="address"
            title="우편번호"
            type="number"
            placeholder="00000(5자리)"
            maxlength="5"
          />
          <Input className="detailAddress" title="상세주소" type="text" />
          <div className="marketFavor wrap">
            <label>선호매장</label>
            <ul className="radioWrap">
              <li>
                <input type="radio" name="gender" />
                <label>광명점</label>
              </li>
              <li>
                <input type="radio" name="gender" />
                <label>고양점</label>
              </li>
              <li>
                <input type="radio" name="gender" />
                <label>기흥점</label>
              </li>
              <li>
                <input type="radio" name="gender" />
                <label>동부산</label>
              </li>
              <li>
                <input type="radio" name="gender" />
                <label>선택안함</label>
              </li>
            </ul>
          </div>

          <div className="buttonWrap wrap">
            <Button
              name="회원가입 완료"
              style="blue"
              goToLink="/main"
              navigate={navigate}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
