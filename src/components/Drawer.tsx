import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useLocation } from 'react-router-dom';
import Spacer from './Spacer';
import SignInButton from './SignInButton';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const drawerWidth = 240;
const routes = [
  { name: 'Overview', to: '/' },
  { name: 'Details', to: '/details' },
];
type Props = Omit<MuiDrawerProps, 'variant' | 'onClose'> & {
  onClose: () => void;
};
function Drawer({ open, sx, onClose, ...rest }: Props) {
  const location = useLocation();
  return (
    <MuiDrawer
      open={open}
      sx={{
        ...sx,
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      {...rest}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List
        component="nav"
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
      >
        {routes.map(({ name, to }) => (
          <ListItem
            key={name}
            component={Link}
            to={to}
            sx={{ color: 'inherit' }}
          >
            <ListItemButton selected={to === location.pathname}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Spacer />
        <ListItem sx={{ justifySelf: 'flex-end' }}>
          <SignInButton />
        </ListItem>
      </List>
    </MuiDrawer>
  );
}

export default Drawer;
//eslint-disable-next-line
export { drawerWidth };
