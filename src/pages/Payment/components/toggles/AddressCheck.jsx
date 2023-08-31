import React from 'react';
import './AddressCheck.scss';

const AddressCheck = ({ addressInfoData }) => {
  const { postCode, address } = addressInfoData;

  return (
    <div className="addressCheck">
      <div className="addressCheckList">
        <div className="addressCheckContent">
          <div className="addressInfo">
            <p className="addressTitle">배송 주소</p>
            <div>
              <p className="addressNumName">우편 번호 :</p>
              <p className="addressNum">{postCode}</p>
            </div>
            <div>
              <p className="addressName">상세 주소 :</p>
              <p className="address">{address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddressCheck;
