import React, { useState, useEffect } from 'react';
import CartList from './components/CartList';
import ProductPriceAll from './components/ProductPriceAll';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState({});

  useEffect(() => {
    fetch('http://10.58.52.244:3000/products/get7', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjkzMjkzMjM1LCJleHAiOjE2OTQxNTcyMzV9.LNetoMh3OgByppYadsnn8YOew6S9chO47kzaQOzQiG0',
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartData(result.data[0]);
      });
  }, []);

  return (
    <div className="cart">
      <div className="cartAll">
        <div className="cartName">
          <div className="cartHeadName">
            <h1>장바구니</h1>
            <img src="images/shopping-cart.png" alt="장바구니 아이콘" />
          </div>
          <div className="cartQuantity">
            <p className="cartQuantityName">전체 상품</p>
            <p className="cartQuantitUnit">(99개)</p>
          </div>
        </div>
        <div className="cartList">
          <CartList cartData={cartData} />
        </div>
      </div>
      <div className="productPrice">
        <ProductPriceAll cartData={cartData} />
      </div>
    </div>
  );
};
export default Cart;
