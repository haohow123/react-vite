import { atom } from 'recoil';

const drawerOpenState = atom({
  key: 'drawerState',
  default: true,
});

export default drawerOpenState;
