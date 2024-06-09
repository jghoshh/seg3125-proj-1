import { Box, Container, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { timeFormatter, dateFormatter } from '../utils/Formatters';

const ConfirmationFollowup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const appointments = location.state?.appointments as [Date, Date][] || [];
  if (!appointments.length) {
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
          <Typography variant="h4" sx={{ fontFamily: 'NewsReader', textAlign: 'center' }}>
            Invalid follow-up information. <br /> Please check your follow-up details and try again.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => navigate('/')} sx={{ mt: 2 }}>
            Go to Home
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
        <Typography variant="body1" textAlign="center" sx={{marginTop: "30px", fontSize: "1.5rem"}}>
          Your follow-ups are all booked. <br/>
          You will receive an email confirmation shortly.
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{marginTop: "30px", fontSize: "1.2rem"}}>
          Follow-up dates: <br/>
          {appointments.map(([date, time], index) => (
            <span key={index}>
              {dateFormatter.format(date)} at {timeFormatter.format(time)}<br/>
            </span>
          ))}
        </Typography>
      </Box>
    </Container>
  );
};

export default ConfirmationFollowup;
