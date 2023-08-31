import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_DATA } from './NavData';
import './Nav.scss';

const Nav = () => {
  const { pathname } = useLocation();
  const EXCEPTION_PATH = ['/login', '/signup'];
  const isExceptionPath = EXCEPTION_PATH.some(path => path === pathname);

  const [userData, setUserData] = useState({});
  const [isClickToggle, setIsClickToggle] = useState(false);

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

  if (isExceptionPath) return null;

  return (
    <nav className="nav">
      <div className="firstLine">
        <img
          className="logo"
          src="/images/5KEA-logo.jpg"
          alt="5KEA"
          onClick={goToMain}
        />
        <div className="searchBar">
          <img src="/images/search.png" alt="돋보기" />
          <input type="text" placeholder="검색어를 입력해주세요" />
        </div>
        <ul className="headerIcons">
          <li>
            <img src="/images/heart-white.png" alt="찜한 상품" />
          </li>
          <li>
            <img
              src="/images/shopping-cart-white.png"
              alt="장바구니"
              onClick={goToCart}
            />
          </li>
          <li>
            <img src="/images/user-white.png" alt="내 정보" />
          </li>
          <li>
            <img
              src="/images/logout-white.png"
              alt="로그아웃"
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

        <div
          className="userFavorStore"
          onClick={() => {
            setIsClickToggle(e => !e);
          }}
        >
          <img src="/images/shop-white.png" alt="선호매장" />
          <span>{userData.favoriteStore}</span>
          {/* <span>고양점</span> */}
          {isClickToggle ? (
            <div className="favoriteStoreModal">
              <div className="modalTop">
                <button className="closeToggleButton">
                  <img src="/images/close.png" alt="닫기" />
                </button>
              </div>
              <div className="modalMain">
                <div className="nameInfo">
                  <div className="storeName">고양점</div>
                  <div className="closedTimeInfo">폐점시간: 오후 8:00</div>
                  <div className="address">주소</div>
                </div>
                <div className="timeInfo">
                  <div className="runTimeInfo">
                    정상영업시간: 오전 11:00 - 오후 9:00
                  </div>
                  <div className="timeInfo">시간</div>
                </div>
                <div className="goToStorePageButton">
                  <button>상점 웹페이지 방문하기</button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
