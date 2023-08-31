import React, { useState, useEffect } from 'react';
import UserInfoList from './components/UserInfoList';
import PaymentProductPrice from './components/PaymentProductPrice';
import './Payment.scss';

const Payment = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.57:3000/orders/information', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjkzMzk1MTQwLCJleHAiOjE2OTQyNTkxNDB9.2XCsXPoHpUYGDNxN9N1M4jEvcuwgp0kve-62L9t7nh4',
      },
    })
      .then(res => res.json())
      .then(result => {
        setPaymentData(result.data);
      });
  }, []);

  return (
    <div className="payment">
      <div className="paymentAll">
        <div className="paymentHeadName">
          <h1>주문 / 결제</h1>
          <img src="images/delivery-truck.png" alt="배송 아이콘" />
        </div>
        <div className="UserInfoList">
          <UserInfoList userInfoData={paymentData} />
        </div>
      </div>
      <div className="paymentProductPrice">
        <PaymentProductPrice paymentProductData={paymentData[0] || {}} />
      </div>
    </div>
  );
};
export default Payment;
