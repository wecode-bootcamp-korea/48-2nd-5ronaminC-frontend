import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  const navigate = useNavigate();

  // const goToMain = () => {
  //   // navigate('/main');
  //   if (validation) {
  //     navigate('/main');
  //   } else {
  //     alert('입력한 값을 확인해주세요!');
  //   }
  // };

  const goToMain = e => {
    e.preventDefault();

    fetch('http://10.58.52.136:3000/users/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userInfo.userId,
        password: userInfo.userPw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.accessToken) {
          localStorage.setItem('TOKEN', result.accessToken);
          alert('로그인 성공');
          navigate('/main');

          return;
        }
        if (result.message === 'INVALID_ID"') {
          alert('존재하지 않는 유저입니다.');
        } else if (result.message === 'INVALID_PASSWORD') {
          alert('비밀번호가 틀렸습니다.');
        }
      });
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const saveUserInfo = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const validation =
    emailRegex.test(userInfo.email) && passwordRegex.test(userInfo.password);

  // const validation =
  //   userInfo.userId.includes('@') && userInfo.userPw.length >= 8;

  return (
    <div className="loginMain">
      <div className="loginMainLeft">
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
      <div className="loginMainRight">
        <form className="userInput">
          <Input
            name="userId"
            className="email"
            title="이메일"
            type="text"
            placeholder="@을 포함한 이메일을 입력해주세요"
            getFunction={saveUserInfo}
          />
          <Input
            name="userPw"
            className="password"
            title="비밀번호"
            type="password"
            placeholder="8자리 이상 입력해주세요"
            getFunction={saveUserInfo}
          />
          <div className="buttonWrap">
            <Button
              name="로그인"
              buttonStyle="blue"
              linkFunction={goToMain}
              validation={validation}
            />
            <Button
              name="회원가입"
              buttonStyle="white"
              linkFunction={goToSignUp}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
