import React, { useState, useEffect } from 'react';
import CartList from './components/CartList';
import ProductPriceAll from './components/ProductPriceAll';
import './Cart.scss';

const Cart = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [cartData, setCartData] = useState([]);

  const getCart = () => {
    fetch(`${apiUrl}/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(result => {
        if (!result.data) return;

        setCartData(result.data);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  if (Object.keys(cartData).length === 0) return null;

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
            <p className="cartQuantitUnit">
              ({cartData[0]?.totalProductQuantity})
            </p>
          </div>
        </div>
        <div className="cartList">
          <CartList cartListData={cartData} getCart={getCart} apiUrl={apiUrl} />
        </div>
      </div>
      <div className="productPrice">
        <ProductPriceAll cartProductData={cartData[0] || {}} />
      </div>
    </div>
  );
};
export default Cart;
