import React, { useState, useEffect } from 'react';
import ProductDetailInfo from './components/toggles/ProductDetailInfo';
import ProductReview from './components/toggles/ProductReview';
import ProductImages from './components/ProductImages';
import ProductNameInfo from './components/ProductNameInfo';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productDetailData, setProductDetailData] = useState({});
  const [currentInfo, setCurrentInfo] = useState('');

  useEffect(() => {
    fetch('http://10.58.52.244:3000/products/showproductdeatil/8', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjkzMjkzMjM1LCJleHAiOjE2OTQxNTcyMzV9.LNetoMh3OgByppYadsnn8YOew6S9chO47kzaQOzQiG0',
      },
    })
      .then(res => res.json())
      .then(result => {
        setProductDetailData(result.data[0]);
      });
  }, []);

  const DETAIL_TABS = [
    {
      id: 1,
      title: '제품 설명',
      engTitle: 'productInfo',
      component: <ProductDetailInfo productDetailData={productDetailData} />,
    },
    {
      id: 2,
      title: '상품평',
      engTitle: 'review',
      component: <ProductReview key={productDetailData.id} />,
    },
    {
      id: 3,
      title: '제품 Q&A',
      engTitle: 'qna',
      component: <ProductDetailInfo productDetailData={productDetailData} />,
    },
  ];

  return (
    <div className="productInfo">
      <div className="productDetailAll">
        <div className="productImages">
          <ProductImages
            key={productDetailData.id}
            productImages={productDetailData.imageUrl}
          />
        </div>
        <div className="productDetail">
          {DETAIL_TABS.map(tab => (
            <button
              key={tab.id}
              className="detailTab"
              onClick={() => {
                if (currentInfo === tab.engTitle) {
                  setCurrentInfo('');

                  return;
                }

                setCurrentInfo(tab.engTitle);
              }}
            >
              <div className="productInfoName">
                <p>{tab.title}</p>
              </div>
              <div className="productInfoNameImg">
                {currentInfo === tab.engTitle ? (
                  <img src="images/back.png" alt="제품 설명 back 토글 버튼" />
                ) : (
                  <img src="images/next.png" alt="제품 설명 토글 버튼" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="productNames">
        {DETAIL_TABS.find(tab => currentInfo === tab.engTitle)?.component || (
          <ProductNameInfo productDetailData={productDetailData} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
