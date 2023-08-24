import React from 'react';
//import Nav from '../../components/Nav/Nav';
// import Footer from '../../components/Footer/Footer';
// import CartList from './components/cartList';
import './Payment.scss';

const Payment = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="cart">
        <div className="cartAll">
          <div></div>
          {/* <div className="cartList">
            <CartList />
          </div> */}
        </div>
        <div className="productPrice">
          {/* <div></div>
          <div className="productPriceAll">
            <ProductPriceAll />
          </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Payment;
