import { Container, Box, Typography, Button } from "@mui/material";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px",
      flexDirection: "column",
      height: "80vh",
    }}>
      <Typography variant="h2" sx={{textAlign: "center" }}>Our Services</Typography>
      <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <ServicesCard title="Standard Service" services={["Deep tissue massage", "Range of Motion Exercises", "Ultrasound theraphy", "Custom exercise plan for at-home work"]} price={45}/>
        <ServicesCard title="Premium Service" services={["All benefits of Standard Service", "Usage of custom machinery and tools", "Work with a private kinesiologist"]} price={95}/>
      </Box>
      <Box display="flex" justifyContent={"center"} alignItems={"center"} flexDirection="column">
        <Typography variant="h4" sx={{ textAlign: "center", fontFamily: "NewsReader", marginTop: "30px"}}>
          Find out the  <span style={{ "marginLeft": 4, "marginRight": 4, fontWeight: 700, fontStyle: "italic" }}> best service </span> for you through a holistic, first assessment: 
        </Typography>
        <Button variant="contained" sx={{ marginTop: "30px" }}>
              Book your <span style={{ "marginLeft": 4, "marginRight": 4, fontWeight: 700, fontStyle: "italic" }}>free</span>consultation
        </Button>
      </Box>
    </Container>
  );
};

export default Services;