import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

interface CustomTextFieldProps {
  title: string;
}

const InputRow = styled(Box)(() => ({
  display: 'flex',
  gap: '16px',
  width: '100%',
}));

const CustomTextField = ({ title }: CustomTextFieldProps) => {
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

const Booking1 = () => {
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
        Book Your <i>Free</i> Consultation
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "500", marginBottom: '32px'}}>
        step (1/2)
      </Typography>
      <Typography variant="h5" sx={{ fontFamily: "NewsReader" , fontWeight: 500, marginBottom: '5px' }}>
        Enter Your Info
      </Typography>
      <Box sx={{  
        backgroundColor: 'rgba(88, 129, 87, 0.5)',
        padding: "50px 30px 50px 30px",
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <InputRow>
          <CustomTextField title={"First Name"} />
          <CustomTextField title={"Last Name"} />
        </InputRow>
        <CustomTextField title={"Email"} />
      </Box>
      <Button variant="contained" sx={{ marginTop: "30px" }}>
              Next Step
      </Button>
    </Container>
  );
};

export default Booking1;