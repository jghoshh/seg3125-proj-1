import { Box, Container, Typography, Button, MenuItem, Select, InputLabel, FormControl, SxProps, Theme } from '@mui/material';
import { styled } from '@mui/system';

interface FormInputProps {
  title: string;
  sx?: SxProps<Theme>;
  options1: string[];
}

interface DoubleFormInputProps extends FormInputProps {
  options2: string[];
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

const DoubleFormInput = ({ sx, title, options1, options2 }: DoubleFormInputProps) => (
  <Box sx={{ ...sx, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "250px", margin: "20px 0px 20px 0px" }}>
    <Typography variant="h5" sx={{ fontFamily: "NewsReader", fontWeight: 500, marginBottom: '3px' }}>
      {title}
    </Typography>
    <FormBox sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(88, 129, 87, 0.5)' }}>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white" }}>
        <InputLabel sx={{ color: "grey", fontSize: "1rem" }}>{title}</InputLabel>
        <Select sx={{ backgroundColor: "white", fontSize: "1rem" }}>
          <MenuItem sx={{ fontSize: "1rem" }} value="">
            <em>None</em>
          </MenuItem>
          {options1.map((option) => (
            <MenuItem sx={{ fontSize: "1rem" }} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white", marginTop: "20px"}}>
        <InputLabel sx={{ color: "grey", fontSize: "1rem" }}>{title}</InputLabel>
        <Select sx={{ backgroundColor: "white", fontSize: "1rem" }}>
          <MenuItem sx={{ fontSize: "1rem" }} value="">
            <em>None</em>
          </MenuItem>
          {options2.map((option) => (
            <MenuItem sx={{ fontSize: "1rem" }} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormBox>
  </Box>
);


const FormInput = ({ sx, title, options1 }: FormInputProps) => (
  <Box sx={{ ...sx, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "250px", margin: "20px 0px 20px 0px" }}>
    <Typography variant="h5" sx={{ fontFamily: "NewsReader", fontWeight: 500, marginBottom: '3px' }}>
      {title}
    </Typography>
    <FormBox sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(88, 129, 87, 0.5)' }}>
      <FormControl fullWidth variant="filled" sx={{ backgroundColor: "white" }}>
        <InputLabel sx={{ color: "grey", fontSize: "1rem" }}>{title}</InputLabel>
        <Select sx={{ backgroundColor: "white", fontSize: "1rem" }}>
          <MenuItem sx={{ fontSize: "1rem" }} value="">
            <em>None</em>
          </MenuItem>
          {options1.map((option) => (
            <MenuItem sx={{ fontSize: "1rem" }} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormBox>
  </Box>
);

const Booking2 = () => {
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
        <FormInput title="Select Location" sx={{ flex: "1.5" }} options1={["Ottawa", "Toronto"]} />
        <FormInput title="Select Service" sx={{ flex: "1.5" }} options1={["Standard Service", "Premium Service"]} />
        <DoubleFormInput title="Select Specialists" sx={{ flex: "2" }} options1={["Standard Service", "Premium Service"]} options2={["1", "2", "3"]} />
        <DoubleFormInput title="Select Date & Time" sx={{ flex: "2" }} options1={["Standard Service", "Premium Service"]} options2={["1", "2", "3"]} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "100%", margin: "24px 0px 30px 0px" }}>
        <Button variant="contained" sx={{ marginTop: "30px", backgroundColor: "#000000", marginLeft: "5px" }}>
          Go Back
        </Button>
        <Button variant="contained" sx={{ marginTop: "30px", marginRight: "5px" }}>
          Confirm Your Booking
        </Button>
      </Box>
    </Container>
  );
};

export default Booking2;