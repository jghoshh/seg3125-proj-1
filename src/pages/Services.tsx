import { Container, Box, Typography, Button } from "@mui/material";
import ServicesCard from "../components/ServicesCard";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: "80vh",
    }}>
      <Typography variant="h2" sx={{ textAlign: "center" }}>Our Services</Typography>
      <Box display="flex" justifyContent={"center"} alignItems={"center"}>
        <ServicesCard title="Standard Service" services={["Deep tissue massage", "Range of Motion Exercises", "Ultrasound theraphy", "Custom exercise plan for at-home work"]} price={45} />
        <ServicesCard title="Premium Service" services={["All benefits of Standard Service", "Usage of custom machinery and tools", "Work with a private kinesiologist"]} price={95} />
      </Box>
      <Typography variant="body2" sx={{textAlign: "center", fontWeight: "500", marginTop: "10px"}}> *We directly bill to the following insurances: <span style={{fontWeight: "700"}}>Manulife, Greeshield, Desjardins, GMS Health, and Canada Life</span> <br/>
        If you're with another provider, you will need to a file a claim. </Typography>
      <Box display="flex" justifyContent={"center"} alignItems={"center"} flexDirection="column" marginTop={"50px"}>
        <Typography variant="h4" sx={{ textAlign: "left", fontFamily: "NewsReader",}}>
          Find out the  <span style={{ "marginLeft": 4, "marginRight": 4, fontWeight: 700, fontStyle: "italic" }}> best service </span> for you through a holistic, first assessment:
        </Typography>
        <Button variant="contained" sx={{ marginTop: "20px"}} onClick={() => navigate("/booking1")}>
          Book your <span style={{ "marginLeft": 4, "marginRight": 4, fontWeight: 700, fontStyle: "italic" }}>free</span>consultation
        </Button>
      </Box>
    </Container>
  );
};

export default Services;