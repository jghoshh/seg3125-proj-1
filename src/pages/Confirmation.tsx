import { Box, Container, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const service = queryParams.get('service');
  const namePhy = queryParams.get('namePhy');
  const nameKis = queryParams.get('nameKis');
  const date = queryParams.get('date');
  const time = queryParams.get('time');

  const isValid = service && namePhy && nameKis && date && time;

  if (!isValid) {
    return (
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
            flexDirection: 'column',
            height: '80vh',
          }}
        >
          <Typography variant="h4" sx={{fontFamily: "NewsReader", textAlign: "center"}}>
            Invalid booking information. {<br/>} Please check your booking details and try again.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Go Back
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
          flexDirection: 'column',
          height: '80vh',
        }}
      >
        <Typography variant="h2">You’re all booked!</Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: 'NewsReader', fontWeight: '400', fontStyle: 'italic' }}
        >
          Confirmation Number: <span style={{ fontWeight: '600' }}>ABC1234</span>
        </Typography>
        <Typography variant="body1" sx={{marginTop: "30px", fontSize: "1.5rem"}}>
          You booked a {service} with {namePhy} and {nameKis} for the {date} at {time}.
        </Typography>
      </Box>
    </Container>
  );
};

export default Confirmation;
