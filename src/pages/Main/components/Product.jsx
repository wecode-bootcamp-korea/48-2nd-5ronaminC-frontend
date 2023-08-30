import React from 'react';

const Product = ({ product, goToProductDetail }) => {
  return (
    <li
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
