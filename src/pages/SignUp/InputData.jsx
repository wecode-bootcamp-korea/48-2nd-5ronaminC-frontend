const INPUT_RADIO_DATA = {
  gender: [
    {
      id: 1,
      name: 'gender',
      title: '남자',
    },
    { id: 2, name: 'gender', title: '여자' },
    { id: 3, name: 'gender', title: '응답안함' },
  ],
  marketFavor: [
    {
      id: 1,
      name: 'market',
      title: '광명점',
    },
    { id: 2, name: 'market', title: '고양점' },
    { id: 3, name: 'market', title: '기흥점' },
    { id: 2, name: 'market', title: '동부산' },
    { id: 3, name: 'market', title: '선택안함' },
  ],
};

const INPUT_GUIDE_DATA = {
  first: [
    {
      id: 1,
      className: 'email',
      title: '이메일',
      type: 'text',
      placeholder: '5KEA@naver.com',
    },
    {
      id: 2,
      className: 'password',
      title: '비밀번호',
      type: 'password',
      placeholder: '소문자,대문자,특수기호 포함 8자리 이상',
    },
    {
      id: 3,
      className: 'name',
      title: '이름',
      type: 'text',
      placeholder: '오케아',
    },
    {
      id: 4,
      className: 'birthday',
      title: '생년월일',
      type: 'text',
      placeholder: '20230513',
      maxLength: '8',
    },
    {
      id: 5,
      className: 'phoneNumber',
      title: '전화번호',
      type: 'number',
      placeholder: '01012345678',
      maxLength: '11',
    },
  ],

  second: [
    {
      id: 6,
      className: 'address',
      title: '우편번호',
      type: 'number',
      placeholder: '00000(5자리)',
      maxLength: '5',
    },
    {
      id: 7,
      className: 'detailAddress',
      title: '상세주소',
      type: 'text',
      placeholder: '이케아아파트 101동 101호',
    },
  ],
};

export { INPUT_RADIO_DATA, INPUT_GUIDE_DATA };
