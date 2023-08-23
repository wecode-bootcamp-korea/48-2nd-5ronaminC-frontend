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
      <div className="productInfo">
        <div className="productDetailAll">
          <div className="productImages">
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
