import { atom } from 'recoil';

const snackbarState = atom({
  key: 'snackbarState',
  default: {
    open: false,
    message: '',
  },
});

export default snackbarState;
