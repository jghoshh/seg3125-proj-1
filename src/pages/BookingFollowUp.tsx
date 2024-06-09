import { useState } from 'react';
import { LocalizationProvider, DatePicker, TimePicker} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { Box, Container, Typography, Button, FormControl, SxProps, Theme} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

interface DoubleFormInputDateTimeProps {
  title: string;
  sx?: SxProps<Theme>;
  dateValue: Date | null;
  timeValue: Date | null;
  onChangeDate: (date: Date | null) => void;
  onChangeTime: (date: Date | null) => void;
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

const BookingFollowUp = () => {
  const navigate = useNavigate();
  const [date1Value, setDate1Value] = useState<Date | null>(null);
  const [date2Value, setDate2Value] = useState<Date | null>(null);
  const [date3Value, setDate3Value] = useState<Date | null>(null);
  const [date4Value, setDate4Value] = useState<Date | null>(null);
  const [time1Value, setTime1Value] = useState<Date | null>(null);  
  const [time2Value, setTime2Value] = useState<Date | null>(null);
  const [time3Value, setTime3Value] = useState<Date | null>(null);
  const [time4Value, setTime4Value] = useState<Date | null>(null);

  const handleConfirmBooking = () => {
    const appointments = [];

    if (date1Value && time1Value) appointments.push([date1Value, time1Value]);
    if (date2Value && time2Value) appointments.push([date2Value, time2Value]);
    if (date3Value && time3Value) appointments.push([date3Value, time3Value]);
    if (date4Value && time4Value) appointments.push([date4Value, time4Value]);

    navigate("/thank-you-followup", { state: { appointments } });
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "50px 0px 50px 0px", height: "85vh" }} maxWidth="lg">
      <Box textAlign={"center"}>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          Book Follow-ups
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "500" }}>
          Specialists remain the same as your first appointment. <br/>
          You can only book up to <span style={{fontWeight: "800"}}>4 future follow-ups at a time.</span> 
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "50%", marginTop: "20px" }}>
        <DoubleFormInputDateTime title="Follow-up #1" sx={{ flex: "2" }} dateValue={date1Value} timeValue={time1Value} onChangeDate={(value) => setDate1Value(value)} onChangeTime={(value) => setTime1Value(value)}/>
        <DoubleFormInputDateTime title="Follow-up #2" sx={{ flex: "2" }} dateValue={date2Value} timeValue={time2Value} onChangeDate={(value) => setDate2Value(value)} onChangeTime={(value) => setTime2Value(value)}/>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "50%", }}>
        <DoubleFormInputDateTime title="Follow-up #3" sx={{ flex: "2" }} dateValue={date3Value} timeValue={time3Value} onChangeDate={(value) => setDate3Value(value)} onChangeTime={(value) => setTime3Value(value)}/>
        <DoubleFormInputDateTime title="Followup #4" sx={{ flex: "2" }} dateValue={date4Value} timeValue={time4Value} onChangeDate={(value) => setDate4Value(value)} onChangeTime={(value) => setTime4Value(value)}/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: "100%", margin: "24px 0px 30px 0px" }}>
        <Button variant="contained" disabled={!((date1Value && time1Value) || (date2Value && time2Value) || (date3Value && time3Value) || (date4Value && time4Value))} onClick={() => handleConfirmBooking()}>
          Confirm Your Booking
        </Button>
      </Box>
    </Container>
  );
}

export default BookingFollowUp;