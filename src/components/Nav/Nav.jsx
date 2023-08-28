import React from 'react';
import './Nav.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  const EXCEPTION_PATH = ['/login', '/sign-up'];
  const isExceptionPath = EXCEPTION_PATH.some(path => path === pathname);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="nav">
      <div className="firstLine">
        <img
          className="logo"
          src="https://www.ikea.com/kr/ko/static/ikea-logo.f7d9229f806b59ec64cb.svg"
          alt="5KEA"
          onClick={goToMain}
        />
        <div className="searchBar">
          <img
            src={`${process.env.PUBLIC_URL}/images/search.png`}
            alt="돋보기"
          />
          <input type="text" placeholder="검색어를 입력해주세요" />
        </div>
        <ul className="headerIcons">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/heart-white.png`}
              alt=""
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/shopping-cart-white.png`}
              alt=""
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/user-white.png`}
              alt=""
            />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/logout-white.png`}
              alt=""
              onClick={goToLogin}
            />
          </li>
        </ul>
      </div>

      <div className="secondLine">
        <ul className="categories">
          <li>모든제품</li>
          <li>공간별 쇼룸</li>
          <li>서비스</li>
        </ul>
        <div className="userFavorMarket">
          <img
            src={`${process.env.PUBLIC_URL}/images/shop-white.png`}
            alt="선호매장"
          />
          <span>고양점</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
