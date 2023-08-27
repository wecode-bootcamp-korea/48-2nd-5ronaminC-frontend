import React from 'react';
import './CartListCheck.scss';

const CartListCheck = () => {
  return (
    <div className="cartListAll">
      <div className="cartListRow">
        <div className="cartImg">
          <img src="images/desk.jpg" alt="장바구니 제품 사진" />
        </div>
        <div className="cartListInfo">
          <div className="cartListProductName">
            <p>ProductName</p>
          </div>
          <div className="cartlistInfoDetail">
            <div className="cartListProducDetail">
              <div className="productItem">품목</div>,
              <div className="productColor">색상</div>,
            </div>
            <div className="cartListProducLength">
              <div className="productWidth">가로</div>X
              <div className="productDepth">세로</div>X
              <div className="productHeight">높이</div>
            </div>
          </div>
        </div>
        <div className="productlistInfoRight">
          <div className="productlistPrice">
            <p className="productlistMoney">2,344,563</p>
            <p className="productlistUnit">원</p>
          </div>
          <div className="productlistQuantity">
            <p>수량 : 1 개</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartListCheck;
