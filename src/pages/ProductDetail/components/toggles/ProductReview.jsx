import React, { useState } from 'react';
import './ProductReview.scss';

const ProductReview = () => {
  const [isPoductReview, setPoductReview] = useState(false);
  const [newReview, setNewReviewPost] = useState({ content: '' });

  const newReviewInput = event => {
    const { value, id } = event.target;
    setNewReviewPost({ ...newReview, [id]: value });
    console.log({ [id]: value });
  };

  const reviewValidation = newReview.content.trim() === '' ? true : false;

  //상품평 작성 통신
  const reviewWrite = () => {
    fetch('API', {
      method: 'Post',
      headers: {
        authorization: '',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content: newReview.content,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

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
        <div className="productReviewListContnet">
          <p className="productReviewName">김슬기</p>
          <p className="productReviewContnet">디자인고 좋고 실용적입니다.</p>
        </div>
      </div>
    </div>
  );
};
export default ProductReview;
