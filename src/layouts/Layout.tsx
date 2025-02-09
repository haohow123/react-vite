import { Box, styled, Toolbar } from '@mui/material';

import Drawer, { drawerWidth } from '@/components/Drawer';
import { useRecoilState, useRecoilValue } from 'recoil';
import drawerOpenState from '@/atoms/drawer';
import AppBar from '@/components/AppBar';
import Snackbar from '@/components/Snackbar';
import snackbarState from '@/atoms/snackbar';
import useSnackbar from '@/hooks/useSnackbar';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  paddingTop: 0,
  minHeight: '100dvh',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

type Props = {
  children: JSX.Element;
};
function Layout({ children }: Props) {
  const [drawerOpen, setDrawerOpen] = useRecoilState(drawerOpenState);
  const snackbar = useRecoilValue(snackbarState);
  const { closeSnackbar } = useSnackbar();
  function handleDrawerOpen() {
    setDrawerOpen(true);
  }
  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  return (
    <Box display="flex">
      <AppBar open={drawerOpen} onOpen={handleDrawerOpen} />
      <Drawer open={drawerOpen} onClose={handleDrawerClose} />
      <Main open={drawerOpen}>
        <Toolbar />
        {children}
      </Main>
      <Snackbar {...snackbar} onClose={closeSnackbar} />
    </Box>
  );
}

export default Layout;
