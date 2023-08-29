import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_DATA } from './NavData';
import './Nav.scss';

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

  const goToCart = () => {
    navigate('/cart');
  };

  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch('/data/userData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: '토큰',
      },
    })
      .then(res => res.json())
      .then(result => {
        setUserData(result.data);
      });
  }, []);

  return (
    <nav className="nav">
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
              onClick={goToCart}
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
          {NAV_DATA.category.map(li => (
            <li key={li.id}>{li.title}</li>
          ))}
        </ul>
        <div className="userFavorMarket">
          <img
            src={`${process.env.PUBLIC_URL}/images/shop-white.png`}
            alt="선호매장"
          />
          {/* <span>{userData.favoriteStore}</span> */}
          <span>고양점</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
