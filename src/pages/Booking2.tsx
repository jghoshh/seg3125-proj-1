import { useState } from 'react';
import { LocalizationProvider, DatePicker, TimePicker} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { Box, Container, Typography, Button, MenuItem, Select, InputLabel, FormControl, SxProps, Theme, SelectChangeEvent} from '@mui/material';
import { styled } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';

interface FormInputProps {
  title: string;
  sx?: SxProps<Theme>;
  options1: string[];
  value1: string; 
  onChange1: (event: SelectChangeEvent<string>) => void; 
}

interface DoubleFormInputProps extends FormInputProps {
  selectTitle1: string;
  selectTitle2: string;
  options2: string[];
  value2: string;
  onChange2: (event: SelectChangeEvent<string>) => void;
}

interface DoubleFormInputDateTimeProps {
  title: string;
  sx?: SxProps<Theme>;
  dateValue: Date | null;
  timeValue: Date | null;
  onChangeDate: (date: Date | null) => void;
  onChangeTime: (date: Date | null) => void;
}

interface LocationState {
  firstName: string;
  lastName: string;
  email: string;
}

const FormBox = styled(Box)(() => ({
  backgroundColor: '#81937B',
  padding: '20px',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: "95%",
  height: "100%"
}));

const DoubleFormInputDateTime = ({ sx, title, dateValue, timeValue, onChangeDate, onChangeTime }: DoubleFormInputDateTimeProps) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
  <Box sx={{ ...sx, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "250px", margin: "20px 0px 20px 0px" }}>
    <Typography variant="h5" sx={{ fontFamily: "NewsReader", fontWeight: 500, marginBottom: '3px' }}>
      {title}
    </Typography>
    <FormBox sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(88, 129, 87, 0.5)' }}>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white", borderRadius: 0 }}>
            <DatePicker
              value={dateValue}
              onChange={onChangeDate}
              slotProps={{
                textField: {
                  sx: { input: { fontSize: '1rem'}, 
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                  borderRadius: '0px', 
                  borderWidth: '1px',
                  borderColor: 'gray', 
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '1px',
                  },},
                }
              }}
            />
      </FormControl>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white", marginTop: "20px"}}>
        <TimePicker
              sx={{color: "grey", fontSize: "1rem"}}
              value={timeValue}
              onChange={onChangeTime}
              slotProps={{
                textField: {
                  sx: { input: { fontSize: '1rem'}, 
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                  borderRadius: '0px', 
                  borderWidth: '1px',
                  borderColor: 'gray', 
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '1px',
                  },},
                }
              }}
            />
      </FormControl>
    </FormBox>
  </Box>
  </LocalizationProvider>
);

const DoubleFormInput = ({ sx, title, selectTitle1, selectTitle2, options1, options2, value1, value2, onChange1, onChange2 }: DoubleFormInputProps) => (
  <Box sx={{ ...sx, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "250px", margin: "20px 0px 20px 0px" }}>
    <Typography variant="h5" sx={{ fontFamily: "NewsReader", fontWeight: 500, marginBottom: '3px' }}>
      {title}
    </Typography>
    <FormBox sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(88, 129, 87, 0.5)' }}>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white" }}>
        <InputLabel sx={{ color: "grey", fontSize: "1rem" }}>{selectTitle1}</InputLabel>
        <Select sx={{ backgroundColor: "white", fontSize: "1rem" }} value={value1} onChange={onChange1} displayEmpty>
          {options1.map((option) => (
            <MenuItem key={`${option}123`} sx={{ fontSize: "1rem" }} value={option}>{option}</MenuItem>
          ))}
          </Select>
      </FormControl>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white", marginTop: "20px"}}>
        <InputLabel sx={{ color: "grey", fontSize: "1rem" }}>{selectTitle2}</InputLabel>
        <Select sx={{ backgroundColor: "white", fontSize: "1rem" }} value={value2} onChange={onChange2} displayEmpty>
          {options2.map((option) => (
            <MenuItem key={`${option}123`} sx={{ fontSize: "1rem" }} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormBox>
  </Box>
);


const FormInput = ({ sx, title, options1, value1, onChange1 }: FormInputProps) => (
  <Box sx={{ ...sx, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "250px", margin: "20px 0px 20px 0px" }}>
    <Typography variant="h5" sx={{ fontFamily: "NewsReader", fontWeight: 500, marginBottom: '3px' }}>
      {title}
    </Typography>
    <FormBox sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(88, 129, 87, 0.5)' }}>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white" }}>
        <InputLabel sx={{ color: "grey", fontSize: "1rem" }}>{title}</InputLabel>
        <Select sx={{ backgroundColor: "white", fontSize: "1rem" }} value={value1} onChange={onChange1} displayEmpty>
          {options1.map((option) => (
            <MenuItem key={`${option}123`} sx={{ fontSize: "1rem" }} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormBox>
  </Box>
);

const Booking2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstName, lastName, email } = (location.state as LocationState) || { firstName: '', lastName: '', email: '' };
  const [locationValue, setLocationValue] = useState('');
  const [serviceValue, setServiceValue] = useState('');
  const [physioValue, setPhysioValue] = useState('');
  const [kinesioValue, setKinesioValue] = useState('');
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [timeValue, setTimeValue] = useState<Date | null>(null);
  console.log(firstName, lastName, email);
  console.log(locationValue, serviceValue);

  const handleNavigation = () => {
    if (firstName && lastName && email && locationValue && serviceValue && physioValue && kinesioValue && dateValue && timeValue) {
      navigate('/thank-you', { state: { firstName, lastName, email, locationValue, serviceValue, physioValue, kinesioValue, dateValue, timeValue } });
    }
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "50px 0px 50px 0px", height: "80vh" }} maxWidth="lg">
      <Box textAlign={"center"}>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          Almost There!
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          step (2/2)
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%", height: "200px", marginTop: "60px" }}>
        <FormInput title="Select Location" sx={{ flex: "1.5" }} options1={["Ottawa", "Toronto"]} value1={locationValue} onChange1={(e) => setLocationValue(e.target.value)}/>
        <FormInput title="Select Service" sx={{ flex: "1.5" }} options1={["Standard Service", "Premium Service"]} value1={serviceValue} onChange1={(e) => setServiceValue(e.target.value)}/>
        <DoubleFormInput title="Select Specialists" selectTitle1="Select Physiotherapist" selectTitle2="Select Kinesiologist" sx={{ flex: "2" }} value1={physioValue} value2={kinesioValue} onChange1={(e) => setPhysioValue(e.target.value)} onChange2={(e) => setKinesioValue(e.target.value)} options1={["John", "Michael"]} options2={["John", "Michael", "Adam"]} />
        <DoubleFormInputDateTime title="Select Date & Time" sx={{ flex: "2" }} dateValue={dateValue} timeValue={timeValue} onChangeDate={(value) => setDateValue(value)} onChangeTime={(value) => setTimeValue(value)}/>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "100%", margin: "24px 0px 30px 0px" }}>
        <Button variant="contained" sx={{ marginTop: "30px", backgroundColor: "#000000", marginLeft: "5px" }}>
          Go Back
        </Button>
        <Button variant="contained" sx={{ marginTop: "30px", marginRight: "5px" }} disabled={!(firstName && lastName && email && locationValue && serviceValue && physioValue && kinesioValue && dateValue && timeValue)} onClick={() => handleNavigation()}>
          Confirm Your Booking
        </Button>
      </Box>
    </Container>
  );
};

export default Booking2;