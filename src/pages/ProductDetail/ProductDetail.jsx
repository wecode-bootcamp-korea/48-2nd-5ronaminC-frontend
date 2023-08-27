import React, { useState } from 'react';
//import Nav from '../../components/Nav/Nav';
//import Footer from '../../components/Footer/Footer';
import ProductDetailInfo from './components/toggles/ProductDetailInfo';
import ProductReview from './components/toggles/ProductReview';
import ProductImages from './components/ProductImages';
import ProductNameInfo from './components/ProductNameInfo';

import './ProductDetail.scss';

const ProductDetail = () => {
  const [isProductDetailInfo, setProductDetailInfo] = useState(false);
  const [isProductReview, setProductReview] = useState(false);

  return (
    <>
      {/* <Nav /> */}
      <div className="productInfo">
        <div className="productDetailAll">
          <div className="productImages">
            <ProductImages />
          </div>
          <div className="productDetail">
            <button
              className="productDetailInfo"
              onClick={() => {
                setProductDetailInfo(e => !e);
              }}
            >
              <div className="productInfoName">
                <p>제품 설명</p>
              </div>
              <div className="productInfoNameImg">
                {isProductDetailInfo ? (
                  <img src="images/back.png" alt="제품 설명 back 토글 버튼" />
                ) : (
                  <img src="images/next.png" alt="제품 설명 토글 버튼" />
                )}
              </div>
            </button>
            <button
              className="productReview"
              onClick={() => {
                setProductReview(e => !e);
              }}
            >
              <div className="productReviewName">
                <p>상품평</p>
              </div>
              <div className="productReviewNameImg">
                {isProductReview ? (
                  <img src="images/back.png" alt="상품평 back 토글 버튼" />
                ) : (
                  <img src="images/next.png" alt="상품평 토글 버튼" />
                )}
              </div>
            </button>
            <button className="productQnA">
              <div className="productQnAName">
                <p>제품 Q&A</p>
              </div>
              <div className="productQnANameImg">
                <img src="images/next.png" alt="제품 Q&A 버튼" />
              </div>
            </button>
          </div>
        </div>
        <div className="productNames">
          {isProductDetailInfo || isProductReview ? (
            (isProductDetailInfo && <ProductDetailInfo />) ||
            (isProductReview && <ProductReview />)
          ) : (
            <ProductNameInfo />
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProductDetail;
