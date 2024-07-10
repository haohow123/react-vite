import { Box } from '@mui/material';

function PageNotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: 'calc(100% - 48px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Page Not Found
    </Box>
  );
}

export default PageNotFound;
