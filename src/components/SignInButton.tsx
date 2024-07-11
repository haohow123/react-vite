import { useRecoilState } from 'recoil';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@mui/material';

import userToken from '@/atoms/userToken';

function SignInButton() {
  const location = useLocation();
  const [token, setToken] = useRecoilState(userToken);
  function handleSignOut() {
    localStorage.removeItem('expiredTime');
    localStorage.removeItem('token');
    setToken('');
  }
  return token ? (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      disableElevation
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  ) : (
    <Button
      variant="contained"
      fullWidth
      disableElevation
      component={Link}
      to="/sign-in"
      state={{ redirectURL: location.pathname }}
    >
      Sign In
    </Button>
  );
}

export default SignInButton;
