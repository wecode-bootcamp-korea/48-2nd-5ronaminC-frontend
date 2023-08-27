import React from 'react';
import './UserInfoList.scss';

const UserInfoList = () => {
  return (
    <div className="userInfoList">
      <div className="userInfoListProductCheck">
        <div className="productCheckName">
          <p>01. 주문상품 확인</p>
        </div>
        <div className="productCheckToggle">
          <button>
            <img src="images/down-chevron.png" alt="세부정보 토글 버튼" />
          </button>
        </div>
      </div>
      <div className="userInfoCheck">
        <div className="userInfoCheckName">
          <p>02. 주문자 정보</p>
        </div>
        <div className="userInfoCheckToggle">
          <button>
            <img src="images/down-chevron.png" alt="세부정보 토글 버튼" />
          </button>
        </div>
      </div>
      <div className="userInfoAddressCheck">
        <div className="addressCheckName">
          <p>03. 배송지 정보</p>
        </div>
        <div className="addressCheckToggle">
          <button>
            <img src="images/down-chevron.png" alt="세부정보 토글 버튼" />
          </button>
        </div>
      </div>
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
                <p className="point">3,344,563</p>
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
              <button>
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
