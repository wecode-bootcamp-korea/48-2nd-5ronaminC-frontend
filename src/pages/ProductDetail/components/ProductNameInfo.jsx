import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductNameInfo.scss';

const MIN_PRODUCT_COUNT = 1;
const MAX_PRODUCT_COUNT = 99;

const ProductNameInfo = ({ productDetailData, setProductDetailData }) => {
  const { id, name, price, type, width, depth, height, assembly, isLiked } =
    productDetailData;

  const [like, setLike] = useState(isLiked);
  const [productCount, setProductCount] = useState(1);
  const [cart, setCart] = useState(id, productCount);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  const goToPayment = () => {
    if (window.confirm('결제 페이지로 이동하시겠습니까?')) {
      navigate('/payment');
    }
  };

  const totalSumPrice = price * productCount;

  const handleIncrease = () => {
    if (productCount >= MAX_PRODUCT_COUNT) {
      return;
    }
    setProductCount(productCount + 1);
  };

  const handleDecrease = () => {
    if (productCount <= 1) {
      return;
    }
    setProductCount(productCount - 1);
  };

  //찜하기 통신 - post
  const likeHandling = () => {
    fetch('API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: '',
      },
      body: JSON.stringify({ isLiked: like }),
    }).then(res => res.json());
  };

  //장바구니, 바로결제 통신 - post
  const goToCart = () => {
    if (window.confirm('장바구니로 이동하시겠습니까?')) {
      navigate('/cart');
      fetch('http://10.58.52.244:3000/carts/addCart7 2', {
        method: 'Post',
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjkzMjkzMjM1LCJleHAiOjE2OTQxNTcyMzV9.LNetoMh3OgByppYadsnn8YOew6S9chO47kzaQOzQiG0',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          id,
          productCount,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
  };
  console.log(id, productCount);

  return (
    <div key={id} className="productNameInfo">
      <div className="productNew">New</div>
      <div className="productInfoTop">
        <div className="productNameWrap">
          <div className="productName">
            <p>
              {/*ProductName*/}
              {name}
            </p>
          </div>
          <div className="productItemDetail">
            <div className="productItem">
              {/*품목*/}
              {type}
            </div>
            ,<div className="productColor">색상</div>,
          </div>
          <div className="productLength">
            <div className="productWidth">
              {/*가로*/}
              {width}
            </div>
            X
            <div className="productDepth">
              {/*세로*/}
              {depth}
            </div>
            X
            <div className="productHeight">
              {/*높이*/}
              {height}
            </div>
          </div>
          <div className="productPrice">
            <p className="productMoney">{price}</p>
            <p className="productPriceUnit">원</p>
          </div>
        </div>
        <div className="productHeart" id="isLiked">
          <img
            onClick={() => {
              likeHandling();
              setLike(prev => !prev);
            }}
            src={isLiked ? 'images/full-heart.png' : 'images/heart.png'}
            alt="찜하기 버튼"
          />
        </div>
        <div className="productReview">
          <p>상품평</p>
          <p>(</p>
          <p>개수</p>
          <p>)</p>
        </div>
      </div>
      <div className="productRelated">
        <div className="productDeliveryFee">
          <img src="images/delivery-truck.png" alt="배송 아이콘" />
          <p>배송비 : 10만원 이상 무료</p>
          <button>자세히</button>
        </div>
        <div className="productShopInfo">
          <img src="images/shop.png" alt="매장 아이콘" />
          <p>매장 정보</p>
        </div>
        <div className="productAssembly">
          <img src="images/diy.png" alt="조립 서비스 아이콘" />
          <p>조립 서비스</p>
          <div className={assembly ? 'green' : 'red'} />
        </div>
      </div>
      <div className="productOrder">
        <div className="productQuantityPrice">
          <div className="productQuantity">
            <div className="productCount">{productCount}</div>
            <button
              className="productQuantityMinus"
              onClick={handleDecrease}
              disabled={productCount <= MIN_PRODUCT_COUNT}
            >
              <img src="images/decrease.png" alt="마이너스 아이콘" />
            </button>
            <button
              className="productQuantityPlus"
              onClick={handleIncrease}
              disabled={productCount >= MAX_PRODUCT_COUNT}
            >
              <img src="images/increase.png" alt="플러스 아이콘" />
            </button>
          </div>
          <div className="productAll">
            <p className="priceAllName">총 금액</p>
            <p className="productAllPrice">{totalSumPrice.toLocaleString()}</p>
            <p className="priceUnit">원</p>
          </div>
        </div>
        <div className="productOrderButton">
          <button className="productDirectOrder" onClick={goToPayment}>
            <img src="images/check-white.png" alt="바로구매 아이콘" />
            <p>바로구매</p>
          </button>
          <button className="productCart" onClick={goToCart}>
            <img src="images/add-to-cart-white.png" alt="장바구니 아이콘" />
            <p>장바구니</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductNameInfo;
