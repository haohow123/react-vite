import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <Container
      maxWidth="md"
      sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
    >
      <Typography>
        Founded in XXXX, XXX Group had a vision to provide comprehensive
        logistics services to clients. Today XXX Group serves destinations
        throughout the world and has grown into one of the leading logistics
        providers from Asia to North America. Our annual cargo volume has
        consistently put us in the top position for Transpacific Trade.
      </Typography>
    </Container>
  );
}
