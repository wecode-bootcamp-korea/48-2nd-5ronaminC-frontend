import React from 'react';
import './CartList.scss';

const CartList = ({ cartListData }) => {
  return (
    <div className="cartListAll">
      {cartListData.map((tab, i) => {
        return (
          <div className="cartListRow" key={i}>
            <div className="cartImg">
              <img src="images/desk.jpg" alt="장바구니 제품 사진" />
            </div>
            <div className="cartListInfo">
              <div className="cartListDelete">
                <button>
                  <img src="images/close.png" alt="삭제 버튼" />
                </button>
              </div>
              <div className="cartListProductName">
                <p>
                  {/*ProductName*/}
                  {tab.productName}
                </p>
              </div>
              <div className="cartlistInfoDetail">
                <div className="cartListProducDetail">
                  <div className="productItem">
                    {/*품목*/}
                    {tab.categoryTypeName}
                  </div>
                  ,
                  <div className="productColor">
                    {/*색상*/}
                    {tab.colorName}
                  </div>
                  ,
                </div>
                <div className="cartListProducLength">
                  <div className="productWidth">
                    {/*가로*/}
                    {tab.width}
                  </div>
                  X
                  <div className="productDepth">
                    {/*세로*/}
                    {tab.depth}
                  </div>
                  X
                  <div className="productHeight">
                    {/*높이*/}
                    {tab.height}
                  </div>
                </div>
              </div>
              <div className="productlistQuantity">
                <p>수량 : {tab.productQuantity} 개</p>
              </div>
              <div className="productlistInfoBottom">
                <div className="productlistPrice">
                  <p className="productlistMoney">{tab.subtotalPrice}</p>
                  <p className="productlistUnit">원</p>
                </div>
                <div className="productlistButton">
                  <div className="productlistHeart">
                    <button>
                      <img src="images/heart.png" alt="찜하기 버튼" />
                    </button>
                  </div>
                  <div className="productlistDirect">
                    <button>
                      <p>바로구매</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartList;
