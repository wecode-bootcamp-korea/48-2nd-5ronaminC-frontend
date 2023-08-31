import React from 'react';
import './UserCheck.scss';

const UserCheck = ({ userInfoData }) => {
  const { username, phoneNumber, email } = userInfoData;

  return (
    <div className="userCheck">
      <div className="userCheckList">
        <div className="userCheckListContent">
          <div className="userCheckToggleName">
            <p className="userCheckTitle">주문자</p>
            <div>
              <p>성함 :</p>
              <p className="user">{username}</p>
            </div>
          </div>
          <div className="contanctInfo">
            <p className="contact">연락처</p>
            <div>
              <p className="phoneNumName">핸드폰 :</p>
              <p className="phoneNum">{phoneNumber}</p>
            </div>
            <div>
              <p className="emailName">이메일 :</p>
              <p className="email">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCheck;
