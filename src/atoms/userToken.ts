import { atom } from 'recoil';

const userToken = atom({
  key: 'userToken',
  default:
    (Number(localStorage.getItem('expiredTime')) || 0) > new Date().getTime()
      ? localStorage.getItem('token')
      : '',
});

export default userToken;
