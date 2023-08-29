import React from 'react';
import './ProductImages.scss';

const ProductImages = ({ key, productImages }) => {
  return (
    <div className="productImageAll" key={key}>
      <div className="productImage">
        <img src="/images/desk.jpg" /*{productImages}*/ alt="제품 1번째 사진" />
      </div>
      {/*"/images/desk.jpg"*/}
      {/*"/images/벤치의자.png"*/}
      <div className="productImage">
        <img src="/images/desk.jpg" /*{productImages}*/ alt="제품 2번째 사진" />
      </div>
      <div className="productImage">
        <img src="/images/desk.jpg" /*{productImages}*/ alt="제품 3번째 사진" />
      </div>
      <div className="productImage">
        <img
          src="/images/벤치의자.png"
          /*{productImages}*/ alt="제품 4번째 사진"
        />
      </div>
    </div>
  );
};
export default ProductImages;
