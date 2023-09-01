import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Radio from './components/Radio/Radio';
import { INPUT_RADIO_DATA, INPUT_GUIDE_DATA } from './inputData';
import './SignUp.scss';

const SignUp = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [signupUserInfo, setSignUserInfoData] = useState({
    email: '',
    password: '',
    username: '',
    birthdate: '',
    phoneNumber: '',
    gender: '',
    postCode: '',
    address: '',
    preferredStoreId: 1,
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setSignUserInfoData({ ...signupUserInfo, [name]: value });
  };

  const signup = () => {
    fetch(`${apiUrl}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(signupUserInfo),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'user is created') {
          alert('회원가입 성공!');
          navigate('/');
        } else {
          alert('회원가입 양식이 틀립니다.');
        }
      });
  };
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const birthdateRegex = /^[0-9]{8}$/;
  const phoneNumberRegex = /^[0-9]{11}$/;
  const postCodeRegex = /^[0-9]{5}$/;

  const validation =
    emailRegex.test(signupUserInfo.email) &&
    passwordRegex.test(signupUserInfo.password) &&
    birthdateRegex.test(signupUserInfo.birthdate) &&
    phoneNumberRegex.test(signupUserInfo.phoneNumber) &&
    postCodeRegex.test(signupUserInfo.postCode);

  return (
    <div className="signUpMain">
      <div className="signUpMainLeft">
        <div className="logo">
          <img src="/images/5KEA-logo.jpg" alt="5KEA logo" />
        </div>
        <div className="title">
          <h1>5KEA FAMILY 회원가입</h1>
          <div className="description">
            <p>이케아 패밀리가 되어 다양한 쇼룸을 만나보세요!</p>
            <span>이미 이케아 패밀리신가요?</span>
            <span className="goToLogin" onClick={() => navigate('/login')}>
              로그인하기
            </span>
          </div>
        </div>
        <div className="info">
          <div>
            <span>5KEA.kr - </span>
            <a href="https://www.ikea.com/kr/ko/customer-service/cookie-policy/">
              쿠키정책
            </a>
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
      <div className="signUpMainRight">
        <form className="userInput" onChange={handleInput}>
          {INPUT_GUIDE_DATA.first.map((el, idx) => (
            <React.Fragment key={el.id}>
              <Input
                className={el.className}
                title={el.title}
                type={el.type}
                placeholder={el.placeholder}
                maxLength={el.maxLength}
              />
              {idx === 4 && (
                <div className="gender wrap">
                  <label>성별</label>
                  <ul className="radioWrap">
                    {INPUT_RADIO_DATA.gender.map(el => (
                      <Radio
                        key={el.id}
                        name={el.name}
                        title={el.title}
                        radioId={el.title}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}

          <div className="preferredStoreId wrap">
            <label>선호매장</label>
            <ul className="radioWrap">
              {INPUT_RADIO_DATA.preferredStoreId.map(el => (
                <Radio
                  key={el.id}
                  name={el.name}
                  title={el.title}
                  radioId={el.id}
                />
              ))}
            </ul>
          </div>

          <div className="buttonWrap wrap">
            <Button
              name="회원가입 완료"
              buttonStyle="blue"
              onClick={signup}
              validation={validation}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
