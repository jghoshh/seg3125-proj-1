import { Box, Container, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { timeFormatter, dateFormatter } from '../utils/Formatters';

interface LocationState {
  firstName: string;
  lastName: string;
  email: string;
  locationValue: string;
  serviceValue: string;
  physioValue: string;
  kinesioValue: string;
  dateValue: Date;
  timeValue: Date;
}

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName, email, locationValue, serviceValue, physioValue, kinesioValue, dateValue, timeValue } = (location.state as LocationState) || { firstName: '', lastName: '', email: '' };
  const isValid =  firstName && lastName && email && locationValue && serviceValue && physioValue && kinesioValue && dateValue && timeValue;

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
            Go To Home
          </Button>
        </Box>
      </Container>
    );
  }

  const formattedDate = dateFormatter.format(dateValue);
  const formattedTime = timeFormatter.format(timeValue);

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
        <Typography textAlign="center" variant="body1" sx={{marginTop: "30px", fontSize: "1.3rem"}}>
          You booked a <span style={{fontWeight: "700"}}> {serviceValue} </span> with 
          <span style={{fontWeight: "700"}}> {physioValue} </span> and <span style={{fontWeight: "700"}}> {kinesioValue} </span> 
          at the <span style={{fontWeight: "700"}}> {locationValue} </span> location
          for <span style={{fontWeight: "700"}}>{`${formattedDate}`}</span> at <span style={{fontWeight: "700"}}>{`${formattedTime}`}</span>.<br/>
          You will receive an email confirmation shortly.
        </Typography>
      </Box>
    </Container>
  );
};

export default Confirmation;
