import React, { useState, useEffect } from 'react';
import CartList from './components/CartList';
import ProductPriceAll from './components/ProductPriceAll';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.178:3000/carts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjkzMjk1MDY4LCJleHAiOjE2OTQxNTkwNjh9.LwmqdR7O5xm2IYRozCPde4fB-JTNPCba971gNN_WGsM',
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartData(result.data);
      });
  }, []);
  console.log(cartData);

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
            <p className="cartQuantitUnit">({cartData.productQuantity})</p>
          </div>
        </div>
        <div className="cartList">
          <CartList cartListData={cartData} />
        </div>
      </div>
      <div className="productPrice">
        <ProductPriceAll cartData={cartData} />
      </div>
    </div>
  );
};
export default Cart;
