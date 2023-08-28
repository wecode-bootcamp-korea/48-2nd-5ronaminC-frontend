import React from 'react';
import UserInfoList from './components/UserInfoList';
import PaymentProductPrice from './components/PaymentProductPrice';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <div className="paymentAll">
        <div className="paymentHeadName">
          <h1>주문 / 결제</h1>
          <img src="images/delivery-truck.png" alt="배송 아이콘" />
        </div>
        <div className="UserInfoList">
          <UserInfoList />
        </div>
      </div>
      <div className="paymentProductPrice">
        <PaymentProductPrice />
      </div>
    </div>
  );
};
export default Payment;
