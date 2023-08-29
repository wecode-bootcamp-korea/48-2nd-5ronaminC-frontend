import React, { useState, useEffect } from 'react';
import './ProductReview.scss';

const ProductReview = key => {
  const [isPoductReview, setPoductReview] = useState(false);
  const [newReview, setNewReviewPost] = useState('');
  const [reviewData, setReviewData] = useState([]);

  const newReviewInput = event => {
    const { value } = event.target;
    setNewReviewPost(value);
  };
  const reviewValidation = newReview.trim() === '' ? true : false;

  //상품평 작성 통신
  const reviewWrite = () => {
    fetch('API', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: '',
      },
      body: JSON.stringify({
        key: key,
        content: newReview,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    setNewReviewPost('');
  };

  //상품평 리스트 보여주기만 통신
  /*
  useEffect(() => {
    fetch('API', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: '토큰',
      },
    })
      .then(res => res.json())
      .then(data => {
        setReviewData(data.data);
        const sortedPosts = data.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setReviewData(sortedPosts);
      });
  }, []);
  */

  return (
    <div className="productReview ">
      <h1>상품평</h1>
      <div
        className="reviewButton"
        onClick={() => {
          setPoductReview(e => !e);
        }}
      >
        {isPoductReview ? (
          <button disabled={reviewValidation} onClick={reviewWrite}>
            <p>상품평 제출</p>
          </button>
        ) : (
          <button>
            <p>상품평 쓰기</p>
          </button>
        )}
      </div>
      {isPoductReview && (
        <div className="poductReviewWrite">
          <div className="poductReviewWriteTitle">
            <p>상품평 작성</p>
            <img src="images/rating.png" alt="상품평 아이콘" />
          </div>
          <div className="poductRevieText">
            <textarea
              cols="30"
              rows="10"
              maxlength="999"
              placeholder="상품평을 작성해주세요."
              onChange={newReviewInput}
              id="content"
            />
          </div>
        </div>
      )}
      <div className="productReviewList">
        <p className="productReviewListTitle">상품평 리스트</p>
        {reviewData.map(reviewData => {
          return (
            <div key={key} className="productReviewListContnet">
              <p className="productReviewName">{reviewData.userName}</p>
              <p className="productReviewContnet">{reviewData.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductReview;
