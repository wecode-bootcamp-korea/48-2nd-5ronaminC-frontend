import React, { useState } from 'react';
import DeliveryFee from './toggles/DeliveryFee';
import './ProductNameInfo.scss';

const ProductNameInfo = () => {
  const [isDeliveryFee, setDeliveryFee] = useState(false);

  return (
    <div className="productNameInfo">
      <div className="productNew">New</div>
      <div className="productInfoTop">
        <div className="productNameWrap">
          <div className="productName">
            <p>ProductName</p>
          </div>
          <div className="productItemDetail">
            <div className="productItem">품목</div>,
            <div className="productColor">색상</div>,
          </div>
          <div className="productLength">
            <div className="productWidth">가로</div>X
            <div className="productDepth">세로</div>X
            <div className="productHeight">높이</div>
          </div>
          <div className="productPrice">
            <p className="productMoney">2,344,563</p>
            <p className="productPriceUnit">원</p>
          </div>
        </div>
        <div className="productHeart">
          <img src="images/heart.png" alt="찜하기 버튼" />
        </div>
        <div className="productReview">
          <p>상품평</p>
          <p>(</p>
          <p>개수</p>
          <p>)</p>
        </div>
      </div>
      <div className="productRelated">
        <div className="productDeliveryFee">
          <img src="images/delivery-truck.png" alt="배송 아이콘" />
          <p>배송비 : 10만원 이상 무료</p>
          <button
            onClick={() => {
              setDeliveryFee(e => !e);
            }}
          >
            자세히
          </button>
        </div>
        <div className="productShopInfo">
          <img src="images/shop.png" alt="매장 아이콘" />
          <p>매장 정보</p>
        </div>
        <div className="productAssembly">
          <img src="images/diy.png" alt="조립 서비스 아이콘" />
          <p>조립 서비스</p>
        </div>
      </div>
      <div className="productOrder">
        <div className="productQuantityPrice">
          <div className="productQuantity">
            <div className="productCount">
              <input type="text" min="1" max="99" placeholder="1" />
            </div>
            <button className="productQuantityMinus">
              <img src="images/decrease.png" alt="마이너스 아이콘" />
            </button>
            <button className="productQuantityPlus">
              <img src="images/increase.png" alt="플러스 아이콘" />
            </button>
          </div>
          <div className="productAll">
            <p className="priceAllName">총 금액</p>
            <p className="productAllPrice">2,344,563</p>
            <p className="priceUnit">원</p>
          </div>
        </div>
        <div className="productOrderButton">
          <button className="productDirectOrder">
            <img src="images/check-white.png" alt="바로구매 아이콘" />
            <p>바로구매</p>
          </button>
          <button className="productCart">
            <img src="images/add-to-cart-white.png" alt="장바구니 아이콘" />
            <p>장바구니</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductNameInfo;
