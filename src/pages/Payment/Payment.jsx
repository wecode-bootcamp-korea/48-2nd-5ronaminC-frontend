import React, { useState, useEffect } from 'react';
import UserInfoList from './components/UserInfoList';
import PaymentProductPrice from './components/PaymentProductPrice';
import './Payment.scss';

const Payment = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/orders/information`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
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
          <UserInfoList userInfoData={paymentData} apiUrl={apiUrl} />
        </div>
      </div>
      <div className="paymentProductPrice">
        <PaymentProductPrice paymentProductData={paymentData[0] || {}} />
      </div>
    </div>
  );
};
export default Payment;
