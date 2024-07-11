import snackbarState from '@/atoms/snackbar';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

function useSnackbar() {
  const setSnackbar = useSetRecoilState(snackbarState);
  const openSnackbar = useCallback(
    (message = '') => {
      setSnackbar((prev) => ({ ...prev, open: true, message }));
    },
    [setSnackbar],
  );
  const closeSnackbar = useCallback(() => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  }, [setSnackbar]);
  return { openSnackbar, closeSnackbar };
}

export default useSnackbar;
