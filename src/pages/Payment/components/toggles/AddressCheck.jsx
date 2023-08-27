import React from 'react';
import './AddressCheck.scss';

const AddressCheck = () => {
  return (
    <div className="addressCheck">
      <div className="addressCheckList">
        <div className="addressCheckContent">
          <div className="addressInfo">
            <p className="addressTitle">배송 주소</p>
            <div>
              <p className="addressNumName">우편 번호 :</p>
              <p className="addressNum">12345</p>
            </div>
            <div>
              <p className="addressName">상세 주소 :</p>
              <p className="address">서울특별시 강남구 테헤란로 427 10층</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddressCheck;
