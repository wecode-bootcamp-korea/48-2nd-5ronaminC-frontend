import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICE_DATA } from './MainData';
import Product from './components/Product';
import './Main.scss';

const Main = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [categoryData, setCategoryData] = useState([]);
  const [showroomData, setShowroomData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [showroomId, setShowroomId] = useState(1);
  const navigate = useNavigate();
  const goToProductDetail = id => {
    navigate(`/product-detail/${id}`);
  };

  const getCategory = () => {
    fetch(
      `${apiUrl}/showroom/category`,

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
        setCategoryData(result.data);
      });
  };

  const getShowroomData = () => {
    fetch(`${apiUrl}/showroom/?spaceCategoryId=${showroomId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setShowroomData(result.data.showroom);
        setProductsData(result.data.products);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getShowroomData();
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
        <div className="showRoomContainer">
          <div className="imageContainer">
            <img
              src={showroomData.showroomImageUrl}
              alt={showroomData.categorySpaceName}
            />
          </div>
          <ul className="listWireframe">
            {productsData.map(product => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  goToProductDetail={goToProductDetail}
                />
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
