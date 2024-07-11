import {
  Box,
  Button,
  Container,
  Popover,
  styled,
  Tab,
  Tabs,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import DetailsLayout from '@/layouts/DetailsLayout';
import { useState } from 'react';
import { useUserLogin } from '@/hooks/useUser';
import { useRecoilValue } from 'recoil';
import userToken from '@/atoms/userToken';

const StyledIcon = styled(ArrowDropDownIcon, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  ...(open && {
    transform: 'rotate(180deg)',
  }),
}));

function Details() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [tabValue, setTabValue] = useState('version');
  const token = useRecoilValue(userToken);
  const { data } = useUserLogin(token);
  const open = Boolean(anchorEl);
  function handleOpen(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function handleTabChange(_: React.SyntheticEvent, value: string) {
    setTabValue(value);
  }
  return (
    <DetailsLayout>
      <Container maxWidth="xs" sx={{ height: '100%', pb: 7 }}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            color="info"
            sx={{ borderColor: 'rgba(0,0,0,0.23)' }}
            onClick={handleOpen}
            endIcon={<StyledIcon open={open} />}
          >
            Details
          </Button>
          <Popover
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            slotProps={{
              paper: { sx: { p: 0.5 } },
            }}
          >
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab value="version" label="version" />
              <Tab value="details" label="user detail" />
            </Tabs>
            <Box
              sx={{
                p: 2,
                height: 80,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              {tabValue === 'version' ? (
                <>version: 7.11.22</>
              ) : (
                <>
                  <span>account: {data?.account}</span>
                  <span>password: {data?.password}</span>
                </>
              )}
            </Box>
          </Popover>
        </Box>
      </Container>
    </DetailsLayout>
  );
}

export default Details;
