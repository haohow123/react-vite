import { IconButton, styled, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';

import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from './Drawer';

const Wrapper = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps & { open?: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type Props = {
  open: boolean;
  onOpen: () => void;
};
function AppBar({ open, onOpen }: Props) {
  return (
    <Wrapper position="fixed" open={open} elevation={0}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={onOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          App Bar / Header
        </Typography>
      </Toolbar>
    </Wrapper>
  );
}

export default AppBar;
