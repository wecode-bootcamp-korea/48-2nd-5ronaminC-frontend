import React from 'react';
//import Nav from '../../components/Nav/Nav';
//import Footer from '../../components/Footer/Footer';
import ProductImages from './components/ProductImages';
//import ProductDetailInfo from './components/ProductDetailInfo';
//import ProductReview from './components/ProductReview';
//import ProductQnA from './components/ProductQnA';
import ProductNameInfo from './components/ProductNameInfo';

import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="productInfo">
        <div className="productDetailAll">
          <div className="productImages">
            <ProductImages />
          </div>
          <div className="productDetail">
            <button className="productDetailInfo">
              <div className="productInfoName">
                <p>제품 설명</p>
              </div>
              <div className="productInfoNameImg">
                <img src="images/next.png" alt="제품 설명 버튼" />
              </div>
            </button>
            <button className="productReview">
              <div className="productReviewName">
                <p>상품평</p>
              </div>
              <div className="productReviewNameImg">
                <img src="images/next.png" alt="상품평 버튼" />
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
          <ProductNameInfo />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProductDetail;
