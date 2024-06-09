import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link, Stack } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

interface CustomTextFieldProps {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField = ({ title, value, onChange }: CustomTextFieldProps) => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0.5,
      width: "100%"
    }}>
      <TextField
        fullWidth
        variant="filled"
        label={title}
        value={value}
        onChange={onChange}
        sx={{
          backgroundColor: "white",
          '.MuiFilledInput-input': {
            color: "black",
            fontSize: "1rem"
          },
          '.MuiInputLabel-root': { 
            color: "grey",
            fontSize: "1rem"
          }
        }}
      />
    </Box>
  );
}

const CurrentPatients = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNavigation = () => {
    if (email) {
      navigate('/follow-up', { state: { email } });
    }
  };

  return (
    <Container maxWidth="md" sx={{ 
      display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: "75vh",
    textAlign: 'center',
    paddingTop: '50px',}}>
      <Typography variant="h2" sx={{ fontWeight: 400, marginBottom: '8px' }}>
        Current Patients Portal
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "500", marginBottom: '32px'}}>
        If you are a new patient, please <Link to="/booking1" component={RouterLink}>book a free consultation</Link> instead.
      </Typography>
      <Box sx={{  
        padding: "50px 30px 50px 30px",
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <CustomTextField title={"Enter your registered email"} value={email} onChange={e => setEmail(e.target.value)}/>
        <Stack direction="row">
        <Button variant="contained" sx={{marginRight: "10px"}} disabled={true} onClick={() => {}}>
          Upload Documents (coming soon)
        </Button>
        <Button variant="contained" disabled={!email} onClick={() => handleNavigation()}>
          Book follow-up
        </Button>
      </Stack>
      </Box>
    </Container>
  );
};

export default CurrentPatients;