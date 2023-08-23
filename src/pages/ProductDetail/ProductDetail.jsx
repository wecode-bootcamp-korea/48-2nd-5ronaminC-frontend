import React from 'react';
//import Nav from '../../components/Nav/Nav';
import ProductImages from './components/ProductImages';
import ProductDetailInfo from './components/ProductDetailInfo';
import ProductReview from './components/ProductReview';
import ProductQnA from './components/ProductQnA';
import ProductNameInfo from './components/ProductNameInfo';

import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <>
      {/* <Nav /> */}
      <h1>제품 상세 페이지</h1>
      <div className="productInfo">
        <div className="productDetailAll">
          <div className="poductImages">
            <ProductImages />
          </div>
          <div className="productDetail">
            <ProductDetailInfo />
            <ProductReview />
            <ProductQnA />
          </div>
        </div>
        <div className="productName">
          <ProductNameInfo />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
