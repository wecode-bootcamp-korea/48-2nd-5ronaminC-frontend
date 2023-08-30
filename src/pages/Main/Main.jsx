import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICE_DATA } from './MainData';
import './Main.scss';

const Main = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [showroomData, setShowroomData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [showroomId, setShowroomId] = useState(1);
  const navigate = useNavigate();
  const goToProductDetail = id => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    fetch('http://10.58.52.206:3000/main/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.52.206:3000/main/?mainId=${showroomId}`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('TOKEN'),
        },
      },
    )
      .then(res => res.json())
      .then(result => {
        setShowroomData(result.data.showroom);
        setProductsData(result.data.products);
      });
  }, [showroomId]);

  return (
    <div className="mainContainer">
      <div className="mainVisual">
        <h2>공간별 쇼핑하기</h2>
        <ul className="tabBar">
          {categoryData.map(category => (
            <li
              className={`category ${
                showroomId === category.id ? 'selected' : ''
              }`}
              key={category.id}
              onClick={() => setShowroomId(category.id)}
            >
              {category.categorySpaceName}
            </li>
          ))}
        </ul>
        <div className="showRoomContainer" key={showroomData.id}>
          <div className="imageContainer">
            <img
              src={showroomData.showroomImageUrl}
              alt={showroomData.categorySpaceName}
            />
          </div>
          <ul className="listWireframe">
            {productsData.map(product => {
              return (
                <li
                  key={product.id}
                  style={{
                    top: `${product.coordinateX}%`,
                    left: `${product.coordinateY}%`,
                  }}
                  onClick={() => goToProductDetail(product.id)}
                >
                  <div className="dot" />
                  <div className="productDetailToggle">
                    <div className="info">
                      <div className="isNew">{product.new && 'new'}New</div>
                      <div className="productName">{product.productName}</div>
                      <div className="categoryTypeName">
                        {product.categoryTypeName}
                      </div>
                      <div className="price">{product.price}원</div>
                    </div>
                    <div className="goButton">
                      <img src="/images/go-arrow.png" alt="화살표" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="serviceContainer">
        <h2>다양한 이케아 서비스</h2>
        <ul className="services">
          {SERVICE_DATA.map(service => (
            <li key={service.id}>
              <img src={service.images} alt={`${service.name} 서비스`} />
              <span>{service.name} 서비스</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
