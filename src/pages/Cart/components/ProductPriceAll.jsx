import React from 'react';
import './ProductPriceAll.scss';

const ProductPriceAll = () => {
  return (
    <div className="productPriceInfo">
      <div className="productPriceInfoName">
        <h2>주문 내역</h2>
      </div>
      <div className="productPriceInfoDetail">
        <div className="productPriceInfoQuantity">
          <p className="InfoQuantityLeft">상품 수량</p>
          <div className="InfoQuantityRight">
            <p className="InfoQuantityCount">2</p>
            <p>개</p>
          </div>
        </div>
        <div className="productPriceInfoAmount">
          <p>상품 금액</p>
          <div className="InfoAmountRight">
            <p className="InfoAmountCount">2,344,563</p>
            <p>원</p>
          </div>
        </div>
        <div className="productPriceInfoDelivery">
          <p>배송비</p>
          <div className="InfoDeliveryRight">
            <p className="InfoDeliveryCount">3000</p>
            <p>원</p>
          </div>
        </div>
      </div>
      <div className="productPriceInfoSum">
        <p>총 주문금액</p>
        <div className="InfoSumRight">
          <p className="InfoSumCount">2,344,563</p>
          <p>원</p>
        </div>
      </div>
      <div className="productPriceInfoButton">
        <button>
          <p>결제하기</p>
          <div className="InfoButtonBg">
            <img src="images/next.png" alt="다음 페이지 버튼" />
          </div>
        </button>
      </div>
      <div className="productRelated">
        <div className="productReturnInfo">
          <img src="images/product-return.png" alt="반품 아이콘" />
          <p>반품 정책</p>
        </div>
        <div className="productAssembly">
          <img src="images/diy.png" alt="조립 서비스 아이콘" />
          <p>조립 서비스 신청</p>
        </div>
      </div>
    </div>
  );
};
export default ProductPriceAll;
