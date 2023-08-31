import React, { useState } from 'react';
import CartListCheck from './toggles/CartListCheck';
import UserCheck from './toggles/UserCheck';
import AddressCheck from './toggles/AddressCheck';
import './UserInfoList.scss';

const UserInfoList = ({ userInfoData }) => {
  const [isProductCheck, setProductCheck] = useState(false);
  const [isUserCheck, setUserCheck] = useState(false);
  const [isAddressCheck, setAddressCheck] = useState(false);

  const arrproductId = userInfoData.map(num => {
    return num.productId;
  });
  console.log(arrproductId);

  const arrproductQuantity = userInfoData.map(num => {
    return num.productQuantity;
  });
  console.log(arrproductQuantity);

  const arrsubtotalPrice = userInfoData.map(num => {
    return num.subtotalPrice;
  });
  console.log(arrsubtotalPrice);

  const CompletePayment = id => {
    fetch('http://10.58.52.57:3000/orders/payment', {
      method: 'Post',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjkzMzk1MTQwLCJleHAiOjE2OTQyNTkxNDB9.2XCsXPoHpUYGDNxN9N1M4jEvcuwgp0kve-62L9t7nh4',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId: arrproductId,
        productQuantity: arrproductQuantity,
        subtotalPrice: arrsubtotalPrice,
        totalProductPrice: id[0].totalProductPrice,
      }),
    })
      .then(res => {
        if (res.message === '결제 완료') {
          alert('결제 완료');
        } else if (res.message === '잔액 부족') {
          alert('잔액 부족');
          return res.json();
        }
      })
      .then(result => {
        console.log(result);
      });
  };

  return (
    <div className="userInfoList">
      <div className="userInfoListProductCheck">
        <div className="productCheckName">
          <p>01. 주문상품 확인</p>
        </div>
        <div className="productCheckToggle">
          <button
            onClick={() => {
              setProductCheck(e => !e);
            }}
          >
            {isProductCheck ? (
              <img src="images/chevron.png" alt="세부정보 up 토글 버튼" />
            ) : (
              <img
                src="images/down-chevron.png"
                alt="세부정보 down 토글 버튼"
              />
            )}
          </button>
        </div>
      </div>
      {isProductCheck && (
        <div className="cartListCheck">
          <CartListCheck cartInfoData={userInfoData} />
        </div>
      )}
      <div className="userInfoCheck">
        <div className="userInfoCheckName">
          <p>02. 주문자 정보</p>
        </div>
        <div className="userInfoCheckToggle">
          <button
            onClick={() => {
              setUserCheck(e => !e);
            }}
          >
            {isUserCheck ? (
              <img src="images/chevron.png" alt="세부정보 up 토글 버튼" />
            ) : (
              <img
                src="images/down-chevron.png"
                alt="세부정보 down 토글 버튼"
              />
            )}
          </button>
        </div>
      </div>
      {isUserCheck && (
        <div className="userCheck">
          <UserCheck userInfoData={userInfoData[0] || {}} />
        </div>
      )}
      <div className="userInfoAddressCheck">
        <div className="addressCheckName">
          <p>03. 배송지 정보</p>
        </div>
        <div className="addressCheckToggle">
          <button
            onClick={() => {
              setAddressCheck(e => !e);
            }}
          >
            {isAddressCheck ? (
              <img src="images/chevron.png" alt="세부정보 up 토글 버튼" />
            ) : (
              <img
                src="images/down-chevron.png"
                alt="세부정보 down 토글 버튼"
              />
            )}
          </button>
        </div>
      </div>
      {isAddressCheck && (
        <div className="addressCheck">
          <AddressCheck addressInfoData={userInfoData[0] || {}} />
        </div>
      )}
      <div className="userInfoPointCheck">
        <div className="pointCheckName">
          <p>04. 포인트 결제</p>
          <img src="images/point.png" alt="포인트 아이콘" />
        </div>
        <div>
          <div className="pointCheckToggle">
            <div className="pointCheck">
              <div className="pointCheckList">
                <p className="pointCheckToggleName">나의 포인트 :</p>
                {/*<p className="point">{parseInt(userInfoData[0].point)}</p>*/}
                <p className="pointUnit">p</p>
              </div>
              <div className="goToCart">
                <button>
                  <img src="images/shopping-cart.png" alt="장바구니 아이콘" />
                  <p>장바구니 돌아가기</p>
                </button>
              </div>
            </div>
            <div className="orderButton">
              <button onClick={() => CompletePayment(userInfoData)}>
                <img src="images/check-white.png" alt="결제 결정 버튼" />
                <p>결제하기</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserInfoList;
