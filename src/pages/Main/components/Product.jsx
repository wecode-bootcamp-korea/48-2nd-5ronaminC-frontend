import React from 'react';

const Product = ({ product, goToProductDetail }) => {
  const calculatePercentageX = x => Math.round((x / 1400) * 100);
  const calculatePercentageY = y => Math.round((y / 700) * 100);
  return (
    <li
      style={{
        top: `${calculatePercentageY(product.coordinateY)}%`,
        left: `${calculatePercentageX(product.coordinateX)}%`,
      }}
      onClick={() => goToProductDetail(product.id)}
    >
      <div className="dot" />
      <div className="productDetailToggle">
        <div className="info">
          <div className="isNew">{product.new && 'new'}New</div>
          <div className="productName">{product.productName}</div>
          <div className="categoryTypeName">{product.categoryTypeName}</div>
          <div className="price">{product.price}원</div>
        </div>
        <div className="goButton">
          <img src="/images/go-arrow.png" alt="화살표" />
        </div>
      </div>
    </li>
  );
};

export default Product;
