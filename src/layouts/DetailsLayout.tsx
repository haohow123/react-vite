import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import userToken from '@/atoms/userToken';
import { Box, Container, Typography } from '@mui/material';
import SignInButton from '@/components/SignInButton';

type Props = {
  children: ReactNode;
};
function DetailsLayout({ children }: Props) {
  const token = useRecoilValue(userToken);
  if (!token) {
    return (
      <Container maxWidth="xs" sx={{ minHeight: '100%' }}>
        <Box
          sx={{
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 3,
          }}
        >
          <Typography variant="h2">Access Denied</Typography>
          <SignInButton />
        </Box>
      </Container>
    );
  }
  return <>{children}</>;
}
export default DetailsLayout;
