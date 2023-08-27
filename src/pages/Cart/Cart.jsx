import React from 'react';
//import Nav from '../../components/Nav/Nav';
// import Footer from '../../components/Footer/Footer';
import CartList from './components/CartList';
import ProductPriceAll from './components/ProductPriceAll';
import './Cart.scss';

const Cart = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="cart">
        <div className="cartAll">
          <div className="cartName">
            <div className="cartHeadName">
              <h1>장바구니</h1>
              <img src="images/shopping-cart.png" alt="장바구니 아이콘" />
            </div>
            <div className="cartQuantity">
              <p className="cartQuantityName">전체 상품</p>
              <p className="cartQuantitUnit">({`99`}개)</p>
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
      {/* <Footer /> */}
    </>
  );
};
export default Cart;
