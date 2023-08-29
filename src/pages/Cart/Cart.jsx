import React, { useState } from 'react';
import CartList from './components/CartList';
import ProductPriceAll from './components/ProductPriceAll';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState({});

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
          <CartList />
        </div>
      </div>
      <div className="productPrice">
        <ProductPriceAll />
      </div>
    </div>
  );
};
export default Cart;
