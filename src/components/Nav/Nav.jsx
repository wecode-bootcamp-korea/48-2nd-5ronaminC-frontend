import React from 'react';
import './Nav.scss';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  const EXCEPTION_PATH = ['/login', '/sign-up'];
  const isExceptionPath = EXCEPTION_PATH.some(path => path === pathname);

  return (
    <div className="nav">
      <div className="firstLine">
        <img
          className="logo"
          src="https://www.ikea.com/kr/ko/static/ikea-logo.f7d9229f806b59ec64cb.svg"
          alt="5KEA"
        />
        <div className="searchBar">
          <input type="text" placeholder="검색어를 입력해주세요" />
        </div>
        <ul className="headerIcons">
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/heart.png`} alt="" />
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/shopping-cart.png`}
              alt=""
            />
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/user.png`} alt="" />
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
            src={`${process.env.PUBLIC_URL}/images/shop.png`}
            alt="선호매장"
          />
          <span>고양점</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
