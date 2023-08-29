import React, { useEffect, useState } from 'react';
import { LIST_DATA } from './MainData';
import './Main.scss';

const Main = () => {
  const [mainData, setMainDataa] = useState();

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
        setMainDataa(result.data);
      });
  }, []);

  return (
    <div className="main">
      <div className="mainVisual">
        <h2>공간별 쇼핑하기</h2>
        <ul className="tabBar">
          {LIST_DATA.map(i => {
            <li key={i.id}>i.name</li>;
          })}

          {/* {mainData.map(i => {
            <li>{i.showRoomName}</li>;
          })} */}
        </ul>
        <div className="showRoomContainer">
          <div className="imageContainer">
            <img
              src="https://user-images.githubusercontent.com/77326740/263655844-aa9fdc4e-e0ca-4637-a07c-305e094d2308.jpg"
              alt=""
            />
          </div>
          <div className="listWireframe">
            <ul className="listContainer">
              <li>
                <a className="dot" />
              </li>
              <li>
                <a className="dot" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="serviceContainer">
        <h2>다양한 이케아 서비스</h2>
        <ul className="services">
          <li>
            <img src="/images/truck.png" alt="배송서비스" />
            <span>배송 서비스</span>
          </li>
          <li>
            <img src="/images/diy.png" alt="조립서비스" />
            <span>조립 서비스</span>
          </li>
          <li>
            <img src="/images/tool.png" alt="설치서비스" />
            <span>설치 서비스</span>
          </li>
          <li>
            <img
              src="/images/interior-design.png"
              alt="인테리어 디자인 서비스"
            />
            <span>인테리어 디자인 서비스</span>
          </li>
          <li>
            <img src="/images/recycle-bag.png" alt="바이백 서비스" />
            <span>바이백 서비스</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
