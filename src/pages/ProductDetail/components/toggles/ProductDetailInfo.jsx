import React, { useState } from 'react';
import './ProductDetailInfo.scss';

const ProductDetailInfo = () => {
  const [isSizeInfo, setSizeInfo] = useState(false);

  return (
    <div className="productDetailInfo">
      <h1>제품 설명</h1>
      <div className="productInfoContent">
        <p>제품 설명........</p>
      </div>
      <div className="size">
        <p>치수</p>
        <button
          onClick={() => {
            setSizeInfo(e => !e);
          }}
        >
          {isSizeInfo ? (
            <img src="images/chevron.png" alt="사이즈 정보 up 토글 버튼" />
          ) : (
            <img
              src="images/down-chevron.png"
              alt="사이즈 정보 down 토글 버튼"
            />
          )}
        </button>
      </div>
      {isSizeInfo && (
        <div className="sizeToggle">
          <div className="productLength">
            <p className="productWidth">가로</p>X
            <p className="productDepth">세로</p>X
            <p className="productHeight">높이</p>
          </div>
        </div>
      )}
      <div className="assemblyMethod">
        <p>조립 방법</p>
        <button>
          <img src="images/down-chevron.png" alt="조립 방법 토글 버튼" />
        </button>
      </div>
      <div className="recoProduct">
        <p>추천 제품</p>
        <button>
          <img src="images/down-chevron.png" alt="조립 방법 토글 버튼" />
        </button>
      </div>
    </div>
  );
};
export default ProductDetailInfo;
