import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <ul className="tabBar">
        <li>거실</li>
        <li>침실</li>
        <li>주방</li>
        <li>욕실</li>
      </ul>

      <div className="showRoomContainer">
        <div className="imageContainer">
          <img src="" alt="" />
        </div>
        <div className="listWireframe">
          <ul className="listContainer">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
